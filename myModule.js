var fs = require('fs')
var path = require('path')

module.exports = function(userDir, userFilter, callback){
	fs.readdir(userDir, function(err, list){
		if(err) {
			return callback(err);
		}
		else{
			list = list.filter(function(file){
				return (path.extname(file) === '.' + userFilter)
			})
			return callback(null, list);
		}
	})
}