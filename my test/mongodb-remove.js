const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });


Todo.findByIdAndRemove('5f3e31ae81fb3d9457ff767a').then((todo) => {
    console.log(todo);
});