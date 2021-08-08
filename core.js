// Core modules are the ones came with the NPM and we can use them immediatly out of the box
// The require function is what we use to load modules
// Many modules are hosted on NPM nad delivered by the community
const path = require("path");

// __dirname returns the project root folder
const dirRoot = path.join(__dirname);
console.log(dirRoot);

// Access the folder uploads
const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);

const util = require("util"); // or const { log } = require("util");
util.log(path.basename(__dirname));

const v8 = require("v8");
util.log(v8.getHeapCodeStatistics());
