	var app = {	
			connectSuccess: function(){
			aleert('Conectado.');
			},
			connectFailure: function(){
			alert('Falha na conexao.');
			}
		};
	function list(){
					var lista = "";
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){									
									lista += "<a href='#' onclick='connect("+device.id+")'>"+device.name+"</a><br>";
									document.getElementById("dispositivos").innerHTML = lista;
								})
							});			
	};
	function connect(device.id){
		alert(device.id);
		//bluetoothSerial.connect(device, app.connectSuccess, app.connectFailure);
	};