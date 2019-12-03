import pandas as pd
import numpy as np

d = {}

for m in ["1", "2", "3", "4", "5", "6"]:
    exec('{} = pd.DataFrame(pd.read_csv("R_" + m + ".csv"))'.format("R" + m))

for i in [R1, R2, R3, R4, R5, R6]:
    i['stop'] = i['stop'].astype(str)
    i['route_sequence'] = i.stop.str[0:3]

data = []
data2 = []
data3 = []
data4 = []
data5 = []
data6 = []


R1 = R1[R1["time2"] != "0"]
R1['sequence'] = np.roll(R1['route_sequence'], 1)
R1['Seconds'] = pd.to_numeric(R1['Seconds'], errors='coerce')
R1_Unique = R1['route_sequence'].unique()
for i in R1_Unique:
    df = R1[(R1['sequence'] == i) | (R1['route_sequence'] == i)]
    df['Seconds'] = pd.to_numeric(df['Seconds'], errors='coerce')
    df = df[df['Seconds'] < 1200]
    data.append([i, df['Seconds'].mean()])
df1 = pd.DataFrame(data)
df1.columns = ['a', 'b']
df1['a'] = pd.to_numeric(df1['a'])
df1 = df1.sort_values(by=['a'])
df1['sum'] = df1.b.cumsum()
    
R2 = R2[R2["time2"] != 0]
R2['sequence'] = np.roll(R2['route_sequence'], 1)
R2['Seconds'] = pd.to_numeric(R2['Seconds'], errors='coerce')
R2_Unique = R2['route_sequence'].unique()
for i in R2_Unique:
    df2 = R2[(R2['sequence'] == i) | (R2['route_sequence'] == i)]
    df2['Seconds'] = pd.to_numeric(df2['Seconds'], errors='coerce')
    df2 = df2[df2['Seconds'] < 1200]
    data2.append([i, df2['Seconds'].mean()])
df2 = pd.DataFrame(data2)
df2.columns = ['a', 'b']
df2['a'] = pd.to_numeric(df2['a'])
df2 = df2.sort_values(by=['a'])
df2['sum'] = df2.b.cumsum()
    
R3 = R3[R3["time2"] != 0]
R3['sequence'] = np.roll(R3['route_sequence'], 1)
R3['Seconds'] = pd.to_numeric(R3['Seconds'], errors='coerce')
R3_Unique = R3['route_sequence'].unique()
for i in R3_Unique:
    df3 = R3[(R3['sequence'] == i) | (R3['route_sequence'] == i)]
    df3['Seconds'] = pd.to_numeric(df3['Seconds'], errors='coerce')
    df3 = df3[df3['Seconds'] < 1200]
    data3.append([i, df3['Seconds'].mean()])
    df3 = (i, df3['Seconds'].mean())
df3 = pd.DataFrame(data3)
df3.columns = ['a', 'b']
df3['a'] = pd.to_numeric(df3['a'])
df3 = df3.sort_values(by=['a'])
df3['sum'] = df3.b.cumsum()

R4 = R4[R4["time2"] != 0]
R4['sequence'] = np.roll(R4['route_sequence'], 1)
R4['Seconds'] = pd.to_numeric(R4['Seconds'], errors='coerce')
R4_Unique = R4['route_sequence'].unique()
for i in R4_Unique:
    df4 = R4[(R4['sequence'] == i) | (R4['route_sequence'] == i)]
    df4['Seconds'] = pd.to_numeric(df4['Seconds'], errors='coerce')
    df4 = df4[df4['Seconds'] < 1200]
    data4.append([i, df4['Seconds'].mean()])
    df4 = (i, df4['Seconds'].mean())
df4 = pd.DataFrame(data4)
df4.columns = ['a', 'b']
df4['a'] = pd.to_numeric(df4['a'])
df4 = df4.sort_values(by=['a'])
df4['sum'] = df4.b.cumsum()

R5 = R5[R5["time2"] != 0]
R5['sequence'] = np.roll(R5['route_sequence'], 1)
R5['Seconds'] = pd.to_numeric(R5['Seconds'], errors='coerce')
R5_Unique = R5['route_sequence'].unique()
for i in R5_Unique:
    df5 = R5[(R5['sequence'] == i) | (R5['route_sequence'] == i)]
    df5['Seconds'] = pd.to_numeric(df5['Seconds'], errors='coerce')
    df5 = df5[df5['Seconds'] < 1200]
    data5.append([i, df5['Seconds'].mean()])
    df5 = (i, df5['Seconds'].mean())
df5 = pd.DataFrame(data5)
df5.columns = ['a', 'b']
df5['a'] = pd.to_numeric(df5['a'])
df5 = df5.sort_values(by=['a'])
df5['sum'] = df5.b.cumsum()

R6 = R6[R6["time2"] != 0]
R6['sequence'] = np.roll(R6['route_sequence'], 1)
R6['Seconds'] = pd.to_numeric(R6['Seconds'], errors='coerce')
R6_Unique = R6['route_sequence'].unique()
for i in R6_Unique:
    df6 = R6[(R6['sequence'] == i) | (R6['route_sequence'] == i)]
    df6['Seconds'] = pd.to_numeric(df6['Seconds'], errors='coerce')
    df6 = df6[df6['Seconds'] < 1200]
    data6.append([i, df6['Seconds'].mean()])
    df6 = (i, df6['Seconds'].mean())
df6 = pd.DataFrame(data6)
df6.columns = ['a', 'b']
df6['a'] = pd.to_numeric(df6['a'])
df6 = df6.sort_values(by=['a'])
df6['sum'] = df6.b.cumsum()


for i in [df1, df2, df3, df4, df5, df6]:
    i.dropna(how='any', inplace=True)

 X = pd.to_numeric(df1['a'])
y = pd.to_numeric(df1['b'].cumsum())
m1, b1 = np.polyfit(X, y, deg=1)
X_test = np.linspace(1, 5000, 1000)
y_test = m1 * X_test + b1
def R1(st1, st2):
    return ((st2 - st1) * m1) + b1

X = pd.to_numeric(df2['a'])
y = pd.to_numeric(df2['b'].cumsum())
m2, b2 = np.polyfit(X, y, deg=1)
X_test = np.linspace(1, 500, 1000)
y_test = m2 * X_test + b2
def R2(st1, st2):
    return ((st2 - st1) * m2) + b2

X = pd.to_numeric(df3['a'])
y = pd.to_numeric(df3['b'].cumsum())
m3, b3 = np.polyfit(X, y, deg=1)
X_test = np.linspace(1, 500, 1000)
y_test = m3 * X_test + b3
def R3(st1, st2):
    return ((st2 - st1) * m3) + b3

X = pd.to_numeric(df4['a'])
y = pd.to_numeric(df4['b'].cumsum())
m4, b4 = np.polyfit(X, y, deg=1)
X_test = np.linspace(1, 500, 1000)
y_test = m4 * X_test + b4
def R4(st1, st2):
    return ((st2 - st1) * m4) + b4

X = pd.to_numeric(df5['a'])
y = pd.to_numeric(df5['b'].cumsum())
m5, b5 = np.polyfit(X, y, deg=1)
X_test = np.linspace(1, 500, 1000)
y_test = m5 * X_test + b5
def R5(st1, st2):
    return ((st2 - st1) * m5) + b5

X = pd.to_numeric(df6['a'])
y = pd.to_numeric(df6['b'].cumsum())
m6, b6 = np.polyfit(X, y, deg=1)
X_test = np.linspace(1, 500, 1000)
y_test = m6 * X_test + b6
def R6(st1, st2):
    return ((st2 - st1) * m6) + b6

ArriveStation = 301
DepartureStation = 321

Route = 3

if Route == 1:
    print(abs(R1(ArriveStation, DepartureStation))/60)
elif Route == 2:
    print(abs(R2(ArriveStation, DepartureStation))/60)
elif Route == 3:
    print(abs(R3(ArriveStation, DepartureStation))/60)
elif Route == 4:
    print(abs(R4(ArriveStation, DepartureStation))/60)
elif Route == 5:
    print(abs(R5(ArriveStation, DepartureStation))/60)
elif Route == 6:
    print(abs(R6(ArriveStation, DepartureStation))/60)
else:
    print("This route is currently not supported")



def analyze(filteredDepartureData,filteredArrivalData,TrainLine,StartStation,EndStation,ArrivalTime,ArrivalDate):

	#sample data
	return {"mean-commute":20,
			"confidence-commute":[4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,11,11,11,12,12,13,13,14,15,16,16,16,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,20,20,20,21,21,22,23,23,23,23,23,26,26,26,26,30,30,34,34,34,37,37,37,37,37,37]
	}