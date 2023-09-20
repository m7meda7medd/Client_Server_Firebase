const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser'); // To parse JSON data

/**********************************************/
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/**********************************************/
// Initialize Firebase
const serviceAccount = require('C:/Users/mohamed/Desktop/Task2_Python_Node_DB/proj1-443a3-firebase-adminsdk-niwik-8bfde77aa3.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
db=admin.firestore()
// Specify the document ID
const documentId = 'Sensor1'; // Replace with your desired document ID

// Add data to the specified document
const docRef = db.collection('demo').doc(documentId);
/**********************************************/
// post Api
var offset = 0 ;
app.post("/Sensor", (req, res) => { 
  
  var SensorReading = req.body;  
  if (SensorReading) {
  docRef.update(SensorReading)
  .then(() => {
    console.log(`Data added to document with ID: ${documentId}`);
    offset+=1 ;
  })
  .catch(error => {
    console.error(`Error adding data: ${error}`);
  });
  
    res.send('Data Received by Node');
  } else {
    res.status(400).send('No Data Provided');
  }
});
/**********************************************/
  const port = 5000;
  app.listen(port, () => {
    console.log(`Node.js server listening on port ${port}`);
  });
  /**********************************************/