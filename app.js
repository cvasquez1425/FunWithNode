console.log('Hello world');

var x = 10;
var y = 25;
console.log(x * y);

var msgs = require("./msgs.js");
var msg = new msgs();
console.log(msg.first);
// console.log(msgs());    the code inside the function is re-executed.
/*console.log(msgs.first);
console.log(msgs.second);
console.log(msgs.third);*/

// folder dependencies
var logger = require("./logger");
logger.log("This is from the logger");