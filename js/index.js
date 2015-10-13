	var app = {	
		
		};
	function list(){					
					bluetoothSerial.list(function(devices){
					var i;
					var lista = '';
					for (i = 0; i < devices.length; i++) {
						lista += "<a  href='#' onclick='connect()'>"+device.id[i] + "</a><br>";;
					}

					document.getElementById("dispositivos").innerHTML = lista;
									
	});
	}
	function connect(){
		var cars = ["BMW", "Volvo", "Saab", "Ford"];
			var text = "";
			var i;
		
		for (i = 0; i < cars.length; i++) {
				text += cars[i] + "<br>";
			}

			document.getElementById("dispositivos").innerHTML = text;

	};
	/*function list(){					
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){
									
									var lista = "";
									lista = "<a  href='#' onclick='connect()'>"+device.id+"</a><br>";
									document.getElementById("dispositivos").innerHTML = lista;
								}),	});
									
	};*/