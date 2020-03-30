const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5e773a4a29037e1b20a24c2c11';

if(!ObjectId.isValid(id)) {
    console.log('Id is not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     if(!todos) {
//         return console.log('Id not found...');
//     }
//     console.log('Todos ' ,todos);
// });



// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found...');
//     }
//     console.log('Todo ' ,todo);
// });



Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found...');
    }
    console.log('Todo by id ' ,todo);
}).catch((err) => console.log(err));