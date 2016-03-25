// publisher
var fs = require('fs')
var EventEmitter = require('events')
var util = require('util')  //en la documentacion de node
var inherits = util.inherits

// Evento asincrono de carga el codigo html
function readFileText(name, callback){
	process.nextTick(function(){
		var content = fs.readFileSync(name)
		callback(content.toString())
	})
}

// Implementacion de mi clase

// Constructor
function TextReader (name){
	EventEmitter.call(this)
	this.name = name
}

// herencia
inherits(TextReader, EventEmitter)

// Metodo
TextReader.prototype.read = function(){
	var self = this
	readFileText(this.name, function (content){
		self.emit('end', content) //emites de  events
	} )
}

/////////

// uso de la clase

var reader = new TextReader('./public/index.html')


module.exports = reader