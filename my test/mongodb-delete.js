const {MongoClient, ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {


    if (err) {
        return console.log("Unable to connect")
    }
    console.log("Connected")

    
    const db = client.db('TodoApp')

    // db.collection('todos').deleteMany({text : "hello my friend"}).then((result) => {
    //     console.log(result)
    // })

    // db.collection('todos').deleteOne({text : "gaming"}).then((result) => {
    //     console.log(result)
    // })

    db.collection('todos').findOneAndDelete({completed : false}).then((result) => {
        console.log(result)
    })

    //client.close();
});
