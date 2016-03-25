// suscriber
var reader = require('./reader.js')

reader.on('end', function (content){
	console.log(content.length)
})
