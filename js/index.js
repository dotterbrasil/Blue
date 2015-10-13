	var app = {	
		
		};
	function list(){	
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){									
									var dispositivo = "";
									var lista = "";
									dispositivo = "<a href='#' onclick='connect()'>"+device.id+"</a><br>";
									lista += dispositivo;
								})
							}, alert('Error'));
			document.getElementById("dispositivos").innerHTML = lista;
	};
	