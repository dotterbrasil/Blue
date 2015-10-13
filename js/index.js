	var app = {	
		
		};
	function list(){	
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){									
									var lista = "";
									lista += "<a href='#' onclick='connect()'>"+device.id+"</a><br>";
								})
							}, alert('Error'));
			document.getElementById("dispositivos").innerHTML = lista;
	};
	