var app = angular.module('myapp', []);

app.controller('MainCtrl', ['$scope', function($scope) {

	//寫死的資料 (因為載入速度太慢)
	//$scope.weatherData = [{"SiteName":"花蓮","UVI":"3","PublishAgency":"中央氣象局","County":"花蓮縣","WGS84Lon":"121,36,18","WGS84Lat":"23,58,37","PublishTime":"2016-03-29 14:00"},{"SiteName":"馬祖","UVI":"2","PublishAgency":"中央氣象局","County":"連江縣","WGS84Lon":"119,55,23","WGS84Lat":"26,10,10","PublishTime":"2016-03-29 14:00"},{"SiteName":"高雄","UVI":"5","PublishAgency":"中央氣象局","County":"高雄市","WGS84Lon":"120,18,29","WGS84Lat":"22,34,04","PublishTime":"2016-03-29 14:00"},{"SiteName":"玉山","UVI":"4","PublishAgency":"中央氣象局","County":"南投縣","WGS84Lon":"120,57,06","WGS84Lat":"23,29,21","PublishTime":"2016-03-29 14:00"},{"SiteName":"臺南","UVI":"4","PublishAgency":"中央氣象局","County":"臺南市","WGS84Lon":"120,12,17","WGS84Lat":"22,59,36","PublishTime":"2016-03-29 14:00"},{"SiteName":"新竹","UVI":"4","PublishAgency":"中央氣象局","County":"新竹縣","WGS84Lon":"121,00,22","WGS84Lat":"24,49,48","PublishTime":"2016-03-29 14:00"},{"SiteName":"鞍部","UVI":"6","PublishAgency":"中央氣象局","County":"臺北市","WGS84Lon":"121,31,12","WGS84Lat":"25,11,11","PublishTime":"2016-03-29 14:00"},{"SiteName":"恆春","UVI":"6","PublishAgency":"中央氣象局","County":"屏東縣","WGS84Lon":"120,44,17","WGS84Lat":"22,00,20","PublishTime":"2016-03-29 14:00"},{"SiteName":"臺北","UVI":"4","PublishAgency":"中央氣象局","County":"臺北市","WGS84Lon":"121,30,24","WGS84Lat":"25,02,23","PublishTime":"2016-03-29 14:00"},{"SiteName":"成功","UVI":"5","PublishAgency":"中央氣象局","County":"臺東縣","WGS84Lon":"121,21,55","WGS84Lat":"23,05,57","PublishTime":"2016-03-29 14:00"},{"SiteName":"基隆","UVI":"5","PublishAgency":"中央氣象局","County":"基隆市","WGS84Lon":"121,43,56","WGS84Lat":"25,08,05","PublishTime":"2016-03-29 14:00"},{"SiteName":"新屋","UVI":"3","PublishAgency":"中央氣象局","County":"桃園縣","WGS84Lon":"121,02,36","WGS84Lat":"25,00,57","PublishTime":"2016-03-29 14:00"},{"SiteName":"蘭嶼","UVI":"3","PublishAgency":"中央氣象局","County":"臺東縣","WGS84Lon":"121,33,02","WGS84Lat":"22,02,19","PublishTime":"2016-03-29 14:00"},{"SiteName":"臺東","UVI":"2","PublishAgency":"中央氣象局","County":"臺東縣","WGS84Lon":"121,08,48","WGS84Lat":"22,45,15","PublishTime":"2016-03-29 14:00"},{"SiteName":"日月潭","UVI":"5","PublishAgency":"中央氣象局","County":"南投縣","WGS84Lon":"120,54,29","WGS84Lat":"23,52,53","PublishTime":"2016-03-29 14:00"},{"SiteName":"金門","UVI":"5","PublishAgency":"中央氣象局","County":"金門縣","WGS84Lon":"118,17,21","WGS84Lat":"24,24,27","PublishTime":"2016-03-29 14:00"},{"SiteName":"宜蘭","UVI":"6","PublishAgency":"中央氣象局","County":"宜蘭縣","WGS84Lon":"121,44,53","WGS84Lat":"24,45,56","PublishTime":"2016-03-29 14:00"},{"SiteName":"澎湖","UVI":"2","PublishAgency":"中央氣象局","County":"澎湖縣","WGS84Lon":"119,33,19","WGS84Lat":"23,34,02","PublishTime":"2016-03-29 14:00"},{"SiteName":"臺中","UVI":"3","PublishAgency":"中央氣象局","County":"臺中市","WGS84Lon":"120,40,33","WGS84Lat":"24,08,51","PublishTime":"2016-03-29 14:00"},{"SiteName":"嘉義","UVI":"5","PublishAgency":"中央氣象局","County":"嘉義市","WGS84Lon":"120,25,28","WGS84Lat":"23,29,52","PublishTime":"2016-03-29 14:00"},{"SiteName":"屏東","UVI":"6","PublishAgency":"環境保護署","County":"屏東縣","WGS84Lon":"120,29,16.92","WGS84Lat":"22,40,23.09","PublishTime":"2016-03-29 14:00"},{"SiteName":"橋頭","UVI":"5","PublishAgency":"環境保護署","County":"高雄市","WGS84Lon":"120,18,20.48","WGS84Lat":"22,45,27.02","PublishTime":"2016-03-29 14:00"},{"SiteName":"新營","UVI":"5","PublishAgency":"環境保護署","County":"臺南市","WGS84Lon":"120,19,2.10","WGS84Lat":"23,18,20.28","PublishTime":"2016-03-29 14:00"},{"SiteName":"朴子","UVI":"5","PublishAgency":"環境保護署","County":"嘉義縣","WGS84Lon":"120,14,50.46","WGS84Lat":"23,27,55.11","PublishTime":"2016-03-29 14:00"},{"SiteName":"塔塔加","UVI":"10","PublishAgency":"環境保護署","County":"嘉義縣","WGS84Lon":"120,52,50.06","WGS84Lat":"23,28,14.19","PublishTime":"2016-03-29 14:00"},{"SiteName":"阿里山","UVI":"2","PublishAgency":"環境保護署","County":"嘉義縣","WGS84Lon":"120,48,05.02","WGS84Lat":"23,30,30.82","PublishTime":"2016-03-29 14:00"},{"SiteName":"斗六","UVI":"5","PublishAgency":"環境保護署","County":"雲林縣","WGS84Lon":"120,32,41.98","WGS84Lat":"23,42,42.67","PublishTime":"2016-03-29 14:00"},{"SiteName":"南投","UVI":"5","PublishAgency":"環境保護署","County":"南投縣","WGS84Lon":"120,41,7.1","WGS84Lat":"23,54,46.8","PublishTime":"2016-03-29 14:00"},{"SiteName":"彰化","UVI":"5","PublishAgency":"環境保護署","County":"彰化縣","WGS84Lon":"120,32,29.47","WGS84Lat":"24,03,57.60","PublishTime":"2016-03-29 14:00"},{"SiteName":"沙鹿","UVI":"5","PublishAgency":"環境保護署","County":"臺中市","WGS84Lon":"120,34,7.66","WGS84Lat":"24,13,32.26","PublishTime":"2016-03-29 14:00"},{"SiteName":"苗栗","UVI":"5","PublishAgency":"環境保護署","County":"苗栗縣","WGS84Lon":"120,49,12.72","WGS84Lat":"24,33,54.97","PublishTime":"2016-03-29 14:00"},{"SiteName":"桃園","UVI":"5","PublishAgency":"環境保護署","County":"桃園市","WGS84Lon":"121,19,11.87","WGS84Lat":"24,59,41.24","PublishTime":"2016-03-29 14:00"},{"SiteName":"板橋","UVI":"5","PublishAgency":"環境保護署","County":"新北市","WGS84Lon":"121,27,31.2","WGS84Lat":"25,00,46.7","PublishTime":"2016-03-29 14:00"},{"SiteName":"淡水","UVI":"5","PublishAgency":"環境保護署","County":"新北市","WGS84Lon":"121,26,57.26","WGS84Lat":"25,09,52.20","PublishTime":"2016-03-29 14:00"}];
	
	$scope.weatherData = [];
	$scope.isFindMe = false;

	$scope.getJson = function(){
		$.ajax({
		  	url: "http://opendata.epa.gov.tw/ws/Data/UV/?format=json",
		  	type: "GET",
		  	dataType: "json",
		  	async: false,
		  	success: function(Jdata) {
		    	$scope.weatherData = Jdata;
		  	},
		  
		  	error: function() {
		    	alert("Oops. Something went wrong. Please try again later.");
		  	}
		});
	}

	$scope.uvi = function(uvi){
		if(uvi <= 2){
			return "fa-smile-o"
		}else if(uvi > 2 && uvi <= 5){
			return "fa-meh-o"
		}else{
			return "fa-frown-o"
		}
	}

	$scope.findMe = function(){
		if (navigator && navigator.geolocation) {
            //getCurrentPosition屬非同步執行，要另定函數解析結果
            navigator.geolocation.getCurrentPosition(parsePosition);
        }
	}

	//解析getCurrentPosition傳回的結果
	function parsePosition(pos) {
	    //分別計算所有距離
	    for (var i = 0; i < $scope.weatherData.length; i++) {
	        var location = $scope.weatherData[i];
	        var lat = $scope.weatherData[i].WGS84Lat.split(",");
	        var lng = $scope.weatherData[i].WGS84Lon.split(",");
	        var newLat = parseFloat(lat[0] + "." + lat[1] + lat[2]);
	        var newLng = parseFloat(lng[0] + "." + lng[1] + lng[2]);
	        //計算兩個LatLng間的距離
	        location.distance = distHaversine(pos.coords.latitude, pos.coords.longitude, newLat, newLng);
	    }
	    //依距離進行排序
	    $scope.weatherData.sort(function (a, b) {
	        if (a.distance == b.distance) return 0;
	        return (a.distance > b.distance) ? 1 : -1;
	    });

	    $scope.$apply( function() {
        	$scope.weatherData;
        	$scope.isFindMe = true;
    	});
	}

	//計算兩個經緯座標間的距離(Haversine公式)
    function distHaversine(lat1, lng1, lat2, lng2) {
        var rad = function (x) { return x * Math.PI / 180; }
        var R = 6371; // earth's mean radius in km
        var dLat = rad(lat2 - lat1);
        var dLong = rad(lng2 - lng1);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(rad(lat1)) * Math.cos(rad(lat2))
                * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return parseFloat(d.toFixed(3));
    }

}]);