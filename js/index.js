	var app = {	
			connectSuccess: function(){
			status = "Conectado.<br>";
			document.getElementById("status").innerHTML = status;
			},
			connectFailure: function(){
			//status = "Falha na conexao.<br>";
			//document.getElementById("status").innerHTML = status;
			alert("Error");
			},
		/*	busca: function(){ 
					var lista = "";
					bluetoothSerial.discoverUnpaired(function(devices){
						devices.forEach(function(device){
									var i = 0;
									var dispositivo = '';
									dispositivo = '"'+device.id+'"';
									string += +device.id+";";
									
									var mac = string.split(";");		
									var quantidade = mac.length;
									var quantidade = quantidade - 1;
									for (i = 0; i < quantidade; i++){
												mac[i];							
									}									
								})
							});			
	};*/
		};
	function list(){ 
					var lista = "";
					bluetoothSerial.list(function(devices) {
					devices.forEach(function(device) {
						var link = '';
							link = '"'+device.id+'"';
							//link = device.id;
							lista += "<a href='#' onclick='connect("+link+")'>"+device.name+"</a><br>";
							document.getElementById("dispositivos").innerHTML = lista;
					})
				});		
	};
	function connect(){ alert("vc é um cara legal");
		bluetoothSerial.connect("18:3B:D2:AD:64:45", app.connectSuccess, app.connectFailure);		
	};
	