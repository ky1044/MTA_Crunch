import pandas as pd

#using the given train line and station name, returns the station ID
#data from stops.txt
#must be careful because stations have different IDs based on what train line is using them
#Suggestion: create a dictionary for each line in this script that stores Name to ID conversion
def NameToID(line,stationName):

	return stationID

#convert mta.txt to dataframe
def ImportMTA():
	gtfsDF = pd.read_csv("../gtfs/stop_times.txt")
	relevantDF = gtfsDF[['trip_id','stop_id','arrival_time','departure_time']]
	return relevantDF

#fitler dataframe from ImportMTA to only relevant information
#i.e. only when the start station or stop station is mentioned
def filterStations(DF,startID,endID):
	return DF[DF['stop_id'].isin([startID,endID])]


#fitler dataframe from filterStations to add time constraint to data
#dataframe will then be passed to Analysis
def filterTimes(DF,arrival):
	

	return DF2


if __name__ == "__main__":
	DF=ImportMTA()
	print(DF)
	print(DF.dtypes)

	DF2 = filterStations(DF,"101S","106S")
	print(DF2)
	print(DF2.dtypes)

	ss = ""
	es = ""