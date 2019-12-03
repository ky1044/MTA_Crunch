import sys 
import json

import importdata
import analysis

#getting input
try:
	TrainLine = sys.argv[1]
	StartStation = sys.argv[2]
	EndStation = sys.argv[3]
	ArrivalTime = sys.argv[4] 
	ArrivalDate = sys.argv[5] 
except Exception as e:
	print("Error:"+str(e))
	TrainLine = "6"
	StartStation = "Astor Pl"
	EndStation = "103 St"
	ArrivalTime = "0900"
	ArrivalDate = "Weekday"




#importing dataset
commute_data = importdata.AddStopNames(importdata.ImportMTA())
DepartureData, ArrivalData = importdata.filterStations(commute_data,StartStation,EndStation)
filteredArrivalData1 = importdata.filterTimes(ArrivalData,ArrivalTime)
filteredArrivalData2 = importdata.filterDates(filteredArrivalData1,ArrivalDate)
filteredDepartureData = DepartureData[DepartureData['trip_id'].isin(filteredArrivalData2['trip_id'])]
filteredArrivalData = filteredArrivalData2[filteredArrivalData2['trip_id'].isin(filteredDepartureData['trip_id'])]

#analysis
dataStructureofChoice = analysis.analyze(filteredDepartureData,filteredArrivalData,TrainLine,StartStation,EndStation,ArrivalTime,ArrivalDate)




#formatting output
#test output

outputjson = {
	'train line':TrainLine,
	'starting station':StartStation,
	'ending station':EndStation,
	'arrival time':ArrivalTime,
	'arrival date':ArrivalDate,
	'data':60,
	'commute-time':32,
	'data':dataStructureofChoice

}

print(json.dumps(outputjson))
