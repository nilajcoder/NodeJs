
/*

Bulit in Modules


* path * events * fs *stream * http

Path Module Provides utilities for working with file and directory path


*/

 const path=require("node:path")

// console.log(__filename)//returns a filename
// console.log(__dirname)//returns a directory name

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename))//.js
// console.log(path.extname(__dirname))//empty string

// console.log(path.parse(__filename))//object
// console.log(path.format(path.parse(__filename)))//exact location

// console.log(path.isAbsolute(__filename))//true


// console.log(path.join("Hii","Hello"))//Hii/hello
// console.log(path.join(__dirname,"hii"))

console.log(path.resolve(__filename))
console.log(path.resolve(__dirname))



