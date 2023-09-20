
import requests 
import datetime 

def UpdateSensorReading2Node() :
    time =str(datetime.datetime.now().strftime("%d-%m-%Y-%H-%M-%S")) #getting format of time 
    print(time)
    SensorReading = {time: 5.321} #dummy reading
    url ='http://localhost:5000/Sensor'
    res = requests.post(url, json=SensorReading)
    print(res.text)


if __name__ == '__main__':
    UpdateSensorReading2Node()
    