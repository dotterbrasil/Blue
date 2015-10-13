	var app = {	
		
		};
	function list(){	
					bluetoothSerial.list(function(devices){
						document.getElementById("dispositivos").innerHTML = devices;
						devices.forEach(function(device){	
									/*var lista = "";
									lista += "<a href='#' onclick='connect()'>"+device.id+"</a><br>";
									document.getElementById("dispositivos").innerHTML = lista;*/
								})
							}, alert('Error'));			
	};
	