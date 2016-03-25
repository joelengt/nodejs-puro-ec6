// suscriber
var reader = require('./reader')  //para tener varios suscribers

reader.on('end', function (content){
	console.log(content)
})

