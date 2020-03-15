const {MongoClient, ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {


    if (err) {
        return console.log("Unable to connect");
    }
    console.log("Connected");

   const db = client.db('TodoApp')

    // db.collection('todos').find({_id : new ObjectID('5e6df9784ba5893a184dfad5')}).toArray().then((docs) => {
    //     console.log("Todos")
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err => {
    //     console.log("Unable to fetch data " ,err)
    // }))


    // db.collection('todos').find().count().then((count) => {
    //     console.log("Todos count : ",count)
        
    // }, (err => {
    //     console.log("Unable to fetch data " ,err)
    // }))

    db.collection('Users').find({name : "alireza"}).toArray().then((docs) => {
        console.log("Users")
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err => {
        console.log("Unable to fetch data " ,err)
    }))

    //client.close();
});
