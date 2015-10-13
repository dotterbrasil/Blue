	var app = {	
		
		};
	function list(){					
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){
									var lista = "<a  href='#' onclick='connect()'>"+device.id+"</a><br>";
									document.getElementById("dispositivos").innerHTML = lista;
								}),
									alert('Erro');
								});
									
	};
	function connect(){
		
	}