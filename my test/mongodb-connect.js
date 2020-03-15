const {MongoClient, ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {


    if (err) {
        return console.log("Unable to connect")
    }
    console.log("Connected")

    
    const db = client.db('TodoApp')


    // db.collection('todos').insertOne({
    //     text : 'something',
    //     completed : 'false'
    // } ,(err,result) => {
    //     if (err) {
    //         return console.log('Unable to insert ',err)
    //     }
    //     console.log(JSON.stringify(result.ops), undefined, 2)
    // });

    db.collection('Users').insertOne({
        name : 'alireza',
        age : 20,
        location : 'Tehran'
    },(err,result) => {
        if (err) {
            return  console.log('Unable to insert ',err)
        }
        console.log(result.ops)
    })

    client.close();
});
