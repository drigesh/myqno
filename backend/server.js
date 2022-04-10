require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
// const User = require("./config");
const admin = require("firebase-admin");
// const { initializeApp } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const {Datastore} = require('@google-cloud/datastore');
const serviceAccount = require('./serviceAccountKey.json');


const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '..','frontend','build')))


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://qnoapp0-default-rtdb.firebaseio.com"
})

const db = admin.firestore();


// getQuote().then( result => {
//   console.log(result.body);
//   const obj = JSON.parse(result.body);
//   const quoteData = {
//     quote: obj.quote,
//     author: obj.author
//   };
//   return db.collection('sampleData').doc('inspiration')
//   .set(quoteData).then(()=> {
//     console.log('new quote written to the database');
//   })
// }) 



// console.log(db.doc('qnoapp0-default-rtdb'));

// let documentRef = firestore.doc('col/doc');

// console.log(db);



db.listCollections().then(collections => {
  for (let collection of collections) {
    console.log(`Found collection with id: ${collection.id}`);
  }
});

// let collectionRef = db.collection('qnoapp0-default-rtdb');

// // Add a document with an auto-generated ID.
// collectionRef.add({foo: 'bar'}).then((documentRef) => {
//   console.log(`Added document at ${documentRef.path})`);
// });


// const shop = db.collection("shop");
// const queryRef = shop.where('address', '==', "iitg market complex");
// console.log(queryRef);


// TODO: Replace the following with your app's Firebase project configuration


// firebase.initializeApp(firebaseConfig);

// const db = firebase.database();
// const User = db.collection("qnoapp0");

app.get('/', (req, res) => {
    let indexpath = path.join(__dirname,'build', 'index.html');
    console.log(indexpath);
    res.sendFile(indexpath);
  })


let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, function() {
  console.log("Server has started successfully at "+port);
});