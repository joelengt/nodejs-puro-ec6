import fs from 'fs'
import EventEmitter from 'events'

function readFileText(name, callback){
	process.nextTick(function(){
		var content = fs.readFileSync(name)
		callback(content.toString())
	})
}

class TextReader extends EventEmitter {
	constructor (name){
		super()   //llamar al constructor de EvenEmitter super()
		this.name = name
	}

	read(){
		// this es relativo al lugar donde fue incovado
		// var self = this, con function el this se tiene que hace ese truco
		readFileText(this.name, content => { //Function Flechas, permiten expandir el scope del this
			//  => Gracias al Arrow Functions respeta el scope de this en el callback
			this.emit('end', content) //emites de  events
		})
	}
}

var reader = new TextReader('./public/index.html')

// console.dir(reader.read) //console.dir --> muestra el objeto como codigo

export default reader
