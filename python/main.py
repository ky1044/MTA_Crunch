import sys 
import json

import importdata

#getting input
try:
	TrainLine = sys.argv[1]
	StartStation = sys.argv[2]
	EndStation = sys.argv[3]
	ArrivalTime = sys.argv[4] 
	ArrivalDate = sys.argv[5] 
except:
	TrainLine = "6"
	StartStation = "Astor Pl"
	EndStation = "103 St"
	ArrivalTime = "0900"
	ArrivalDate = "Weekday"



try:
	#importing dataset
	ss = importdata.NameToID(TrainLine,StartStation)
	es = importdata.NameToID(TrainLine,EndStation)
	commute_data = importdata.ImportMTA()
	DepartureData, ArrivalData = importdata.filterStations(commute_data,ss,es)
	filteredArrivalData1 = importdata.filterTimes(ArrivalData,ArrivalTime)
	filteredArrivalData = importdata.filterDates(filteredArrivalData1,ArrivalDate)
	filteredDepartureData = DepartureData[DepartureData['trip_id'].isin(filteredArrivalData['trip_id'])]


	#analysis
except:
	pass



#formatting output
#test output
outputjson = {
	'train line':TrainLine,
	'starting station':StartStation,
	'ending station':EndStation,
	'arrival time':ArrivalTime,
	'arrival date':DayofWeek,
	'data':60,
	'commute-time':32

}

print(json.dumps(outputjson))
