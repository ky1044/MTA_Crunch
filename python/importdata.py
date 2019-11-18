import pandas as pd
from datetime import datetime
import stops

#using the given train line and station name, returns the station ID
#data from stops.txt
#must be careful because stations have different IDs based on what train line is using them
#Suggestion: create a dictionary for each line in this script that stores Name to ID conversion
def NameToID(line,stationName):
	return stops.table[line][stationName]

#convert mta.txt to dataframe
def ImportMTA():
	gtfsDF = pd.read_csv("../gtfs/stop_times.txt")
	relevantDF = gtfsDF[['trip_id','stop_id','arrival_time','departure_time']]
	return relevantDF

#fitler dataframe from ImportMTA to only relevant information
#i.e. only when the start station or stop station is mentioned
def filterStations(DF,startID,endID):
	#Version 1
	# return DF[DF['stop_id'].isin([startID,endID])]
	#Version 2
	# return DF[DF['stop_id']==startID], DF[DF['stop_id']==endID]
	#Version 3
	return DF[DF['stop_id'].apply(lambda x:startID == x[:-1])], DF[DF['stop_id'].apply(lambda x:endID == x[:-1])]


#fitler dataframe from filterStations to add time constraint to data
def filterTimes(DF,arrivalTime):
	TargetMinute = int(arrivalTime[:2])*60+int(arrivalTime[2:])
	return DF[abs(DF['arrival_time'].apply(lambda x: 60*int(x[:2])+int(x[3:5]))-TargetMinute)<=30]

#fitler dataframe from filterTimes to add date constraint to data
#dataframe will then be passed to Analysis
def filterDates(DF,arrivalDate):

	return DF[DF['trip_id'].apply(lambda x: arrivalDate.lower() in x.lower())]


if __name__ == "__main__":
	DF=ImportMTA()
	print(DF)
	print(DF.dtypes)
	firstStop = NameToID("6","103 St")
	lastStop = NameToID("6","Astor Pl")

	DDF,ADF = filterStations(DF,firstStop,lastStop)
	print(ADF)
	print(DDF)

	FADF1=filterTimes(ADF,"1700")
	print(FADF1)

	FADF = filterDates(FADF1,"Weekday")
	print(FADF)

	FDDF = DDF[DDF['trip_id'].isin(FADF['trip_id'])]
	print(FDDF)

