const user = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm a ${user.name} from ${user.campus}`
}));
