angular.module('app.controllers', ['ionic-timepicker'])


.controller('colorPickerCtrl', function($scope, dataService) {
    $scope.drag = function(value) {
        $scope.rangeValue = value;

        // ColorTemperature to RGB
        var temperature = value / 100.0;
        var red, green, blue;

        if (temperature < 66.0) {
            red = 255;
        } else {
            red = temperature - 55.0;
            red = 351.97690566805693 + 0.114206453784165 * red - 40.25366309332127 * Math.log(red);
            if (red < 0) red = 0;
            if (red > 255) red = 255;
        }

        /* Calculate green */

        if (temperature < 66.0) {
            green = temperature - 2;
            green = -155.25485562709179 - 0.44596950469579133 * green + 104.49216199393888 * Math.log(green);
            if (green < 0) green = 0;
            if (green > 255) green = 255;

        } else {
            green = temperature - 50.0;
            green = 325.4494125711974 + 0.07943456536662342 * green - 28.0852963507957 * Math.log(green);
            if (green < 0) green = 0;
            if (green > 255) green = 255;

        }

        /* Calculate blue */

        if (temperature >= 66.0) {
            blue = 255;
        } else {

            if (temperature <= 20.0) {
                blue = 0;
            } else {
                blue = temperature - 10;
                blue = -254.76935184120902 + 0.8274096064007395 * blue + 115.67994401066147 * Math.log(blue);
                if (blue < 0) blue = 0;
                if (blue > 255) blue = 255;
            }
        }

        $scope.rgb = { red: Math.round(red), blue: Math.round(blue), green: Math.round(green) };
        dataService.setRgb($scope.rgb);
        var red = $scope.rgb.red;
        var green = $scope.rgb.green;
        var blue = $scope.rgb.blue;
        var color = document.getElementById('color-temp')

        color.style.backgroundColor = rgbForCss(red, green, blue);
    }

    function rgbForCss(r, g, b) {
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    $scope.rangeValue = 2700;

})

.controller('alarmCtrl', function($scope, ionicTimePicker, dataService) {

    var ipObj1 = {
        callback: function(val) { //Mandatory
            if (typeof(val) === 'undefined') {
                console.log('Time not selected');
            } else {
                var selectedTime = new Date(val * 1000);
                console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
                $scope.hour = selectedTime.getUTCHours();
                $scope.minute = selectedTime.getUTCMinutes();
                dataService.setString(selectedTime.getUTCHours());
                // $scope.minute1 = dataService.getRgb();
            }
        },
        inputTime: 50400, //Optional
        format: 12, //Optional
        step: 15, //Optional
        setLabel: 'Set' //Optional
    };

    $scope.init = function() {
        ionicTimePicker.openTimePicker(ipObj1);

    }

})

.controller('weatherCtrl', function($scope, dataService, $http, $log) {
    function timeCon(unix_timestamp) {
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime;
    }


    $scope.getWeather = function() {
        // Fetch the data from the public API through JSONP.
        // See http://openweathermap.org/API#weather.

        $scope.city = 'nanjing, cn';
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=nanjing,cn&appid=a3d8211a84683044c29515ead39fff2b';
        $http.jsonp(url, {
            params: {
                q: $scope.city,
                callback: 'JSON_CALLBACK'
            }
        }).
        success(function(data, status, headers, config) {
            $scope.place = data.name + ", " + data.sys.country;
            $scope.main = data.weather[0].main;
            $scope.description = data.weather[0].description;
            $scope.Sunrise = timeCon(data.sys.sunrise);
            $scope.Sunset = timeCon(data.sys.sunset);
        }).
        error(function(data, status, headers, config) {
            // Log an error in the browser's console.
            $log.error('Could not retrieve data from ' + url);
        });
    };
})
