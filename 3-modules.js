// Common JS, every file is module (by default)
// Modules - Encapsualted Code (only share minmum)
const names = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

require("./7-mind-grenade"); // this will invoke the imported module

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);