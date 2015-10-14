	var app = {	
		
		};
	function list(){	
					var lista = "";
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){									
									lista += "<a href='#' onclick='connect()'>"+device.id+"</a><br>";
									document.getElementById("dispositivos").innerHTML = lista;
								})
							});			
	};
	