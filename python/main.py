import sys 
import json

TrainLine = sys.argv[1]
StartStation = sys.argv[2]
EndStation = sys.argv[3]
ArrivalTime = sys.argv[4]


outputjson = {
	'train line':TrainLine,
	'starting station':StartStation,
	'ending station':EndStation,
	'arrival time':ArrivalTime,
	'data':60,
	'commute-time':32

}

print(json.dumps(outputjson))

#
#TODO
#create method to get station id from station name and train line
#create method to extract rows from mta.txt based on arrival time
#figure out how to store the data, probably in dataframe
