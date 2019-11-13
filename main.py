import sys 
TrainLine = sys.argv[1]
StartStation = sys.argv[2]
EndStation = sys.argv[3]
ArrivalTime = sys.argv[4]

print("Train Line: " + StartStation) 
print("Starting station: " + StartStation) 
print("Ending station: " + EndStation)
print("Time of Arrival: " + ArrivalTime)

#
#TODO
#create method to get station id from station name and train line
#create method to extract rows from mta.txt based on arrival time
#figure out how to store the data, probably in dataframe
