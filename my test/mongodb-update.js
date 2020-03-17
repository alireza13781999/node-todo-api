const {MongoClient, ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {


    if (err) {
        return console.log("Unable to connect")
    }
    console.log("Connected")

    
    const db = client.db('TodoApp')

    // db.collection('todos').findOneAndUpdate({
    //     _id : new ObjectID('5e6e3d9d4ba5893a184e0545')
    // }, {
    //     $set : {
    //         completed : false
    //     }
    // }, {
    //     returnOriginal : false
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2))
    // })

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5e6e04804ba5893a184dfd52')
    }, {
        $set : {
            name : 'Azar'
        },
        $inc : {
            age : 20
        }
    }, {
        returnOriginal : false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2))
    })

    client.close();
});
