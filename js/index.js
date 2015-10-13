	var app = {	
		
		};
	function list(){	
				alert('Error');
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){									
									var dispositivo = "";
									var lista = "";
									dispositivo = "<a href='#' onclick='connect()'>"+device.id+"</a><br>";
									lista += dispositivo;
									document.getElementById("dispositivos").innerHTML = lista;
								})
							}, alert('Error'));			
	};
	