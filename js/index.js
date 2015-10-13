	var app = {	
		
		};
	function list(){						
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){
									alert(device.id);
								}),
									alert('Erro');
								});
									
	};
	function connect(){		
					bluetoothSerial.isConnected(function(){
													alert("Conectado");
												},
												function(){
													alert("Falha em conectar");
													});									
	};