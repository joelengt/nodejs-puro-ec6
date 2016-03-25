'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function readFileText(name, callback) {
	process.nextTick(function () {
		var content = _fs2.default.readFileSync(name);
		callback(content.toString());
	});
}

var TextReader = function (_EventEmitter) {
	_inherits(TextReader, _EventEmitter);

	function TextReader(name) {
		_classCallCheck(this, TextReader);

		//llamar al constructor de EvenEmitter super()

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextReader).call(this));

		_this.name = name;
		return _this;
	}

	_createClass(TextReader, [{
		key: 'read',
		value: function read() {
			var _this2 = this;

			// this es relativo al lugar donde fue incovado
			// var self = this, con function el this se tiene que hace ese truco
			readFileText(this.name, function (content) {
				//Function Flechas, permiten expandir el scope del this
				//  => Gracias al Arrow Functions respeta el scope de this en el callback
				_this2.emit('end', content); //emites de  events
			});
		}
	}]);

	return TextReader;
}(_events2.default);

var reader = new TextReader('./public/index.html');
console.dir(reader.read); //console.dir --> muestra el objeto como codigo
exports.default = reader;
