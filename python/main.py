import sys 
import json

import importdata

#getting input
try:
	TrainLine = sys.argv[1]
	StartStation = sys.argv[2]
	EndStation = sys.argv[3]
	ArrivalTime = sys.argv[4] 
except:
	TrainLine = "6"
	StartStation = "Astor Pl"
	EndStation = "91st St"
	ArrivalTime = "0900"


try:
	#importing dataset
	ss = importdata.NameToID(TrainLine,StartStation)
	es = importdata.NameToID(TrainLine,EndStation)
	commute_data1 = importdata.ImportMTA()
	commute_data2 = importdata.filterStations(commute_data1,ss,es)
	commute_data = importdata.filterTimes(commute_data2,ArrivalTime)

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
	'data':60,
	'commute-time':32

}

print(json.dumps(outputjson))
