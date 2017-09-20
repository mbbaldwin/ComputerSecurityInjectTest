//				Solution Hello World

/*
console.log("HELLO WORLD")
*/


//				Solution Baby Steps

/*
var sum = 0

for(var i = 2; i < process.argv.length; i++)
	sum += Number(process.argv[i])

console.log(sum)
*/

//				Solution My First I/O

/*
var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])
var arr = buf.toString().split("\n")

console.log(arr.length - 1)
*/

//				Solution My First ASYNC I/O

/*
var fs = require('fs')
var file = process.argv[2]
var arr = undefined


function readWriteFile(callback){
	fs.readFile(file, function doneReading(err, fileContents){
		arr = fileContents.toString().split("\n")
		callback()
	})
}

function logResults(){
	console.log(arr.length - 1)
}

readWriteFile(logResults)
*/
//				OFFICIAL SOLUTION My First ASYNC I/O

/*
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function(err, contents){
	if(err){
		return console.log(err)
	}
	var lines = contents.toString().split('\n').length -1
	console.log(lines)
})
*/

//				Solution Filtered LS

/*
var fs = require('fs')

var userDir = process.argv[2]
var userFilter = process.argv[3]
var pat = RegExp('\\.' + userFilter + '$')

file = fs.readdir(userDir, function(err, files){
	for(i = 0; i< files.length; i++){
		if(pat.test(files[i])){
			console.log(files[i])
		}
	}
});
*/

//				Solution Modular

//look at second file name myModule.js in Node Tutorials Folder

/*
var mymodule = require('./myModule.js')
var path = require('path')

var userDir = process.argv[2]
var userFilter = process.argv[3]
//var pat = RegExp('\\.' + userFilter + '$')

var callback = function(err, list) {
	if(err) throw err;
	list.forEach(function (file) {
		console.log(file);
	})
}

mymodule(userDir, userFilter, callback)
*/

// 				Solution HTTP Client













