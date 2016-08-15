angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('dataService', function() {
	var stringValue = 12;
	var red;
	var green;
	var blue;
	var chosenColor;
	var brightness;
	var pluseWidth;
	var alarmTime;
	var weather;
	var sunrise;
	var sunset;
	var alarmTrigger = false;

	return {
		setRgb: function(value) {
			rgb = value;
		},
		getRgb: function() {
			return rgb;
		},
		getString: function() {
			return stringValue;
		},
		setString: function(value) {
			stringValue = value;
		},
		setColor: function(value) {
			chosenColor = value;
		},
		getColor: function() {
			return chosenColor;
		},
		setCountDownLight: function() {
			//chosenColor = {"r": 255, "g": 0, "b": 0, "a": 0};
			//alert("countdown")
		},
		setBrightness: function(value) {
			brightness = value;
		},
		setAlarmTime: function(value) {
			alarmTime = value;
			//alert(alarmTime);
		},
		getAlarmTime: function() {
			return alarmTime;
		},
		setAlarmTrigger: function(value) {
			alarmTrigger = value;
		},
		getAlarmTrigger: function() {
			return alarmTrigger;
		},
		setWeather: function(value) {
			if(value === "Rain") {
				return {"r": 0, "g": 0, "b": 255, "a": 0};
			}
			else if(value === "Sunny") { 
				return {"r": 255, "g": 0, "b": 0, "a": 0};
			}
			else {
				return {"r": 0, "g": 255, "b": 0, "a": 0};
			}
		},
		getSunrise: function() {
			return sunrise;
		},
		setSunrise: function(value) {
			sunrise = value;
		},
		getSunset: function() {
			return sunset;
		},
		setSunset: function(value) {
			sunset = value;
		}
	}
})

