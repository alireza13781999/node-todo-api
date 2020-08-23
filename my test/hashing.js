const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 2
};

var token = jwt.sign(data, "abc");
console.log(token);

var decoded = jwt.verify(token, "abc");
console.log(decoded);

// var message = "I am alireza";
// var hash = SHA256(message);

// console.log(`hashed message ${hash}`);


// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + "secret").toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + "secret").toString();
// if (resultHash === token.hash) {
//     console.log("safe");
// } else {
//     console.log("unsafe");
// }

