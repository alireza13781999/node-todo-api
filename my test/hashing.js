const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abcd123?';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$KaKhAevjhpkakntPN3jile182ZAx7hIRn4V0OCuoADtU5E7dvvy8K';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 2
// };

// var token = jwt.sign(data, "abc");
// console.log(token);

// var decoded = jwt.verify(token, "abc");
// console.log(decoded);

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

