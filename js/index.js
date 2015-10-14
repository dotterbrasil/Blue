	var app = {	
			connectSuccess: function(){
			alert('Conectado.');
			},
			connectFailure: function(){
			alert('Falha na conexao.');
			}
		};
	function list(){ 
					var lista = "";
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){									
									lista += "<a href='#' value='"+device.id+"' onclick='connect("+device.id+")'>"+device.name+"</a><br>";
									document.getElementById("dispositivos").innerHTML = lista;
								})
							});			
	};
	function connect(device){
		alert(device.id);
		//bluetoothSerial.connect(device, app.connectSuccess, app.connectFailure);
	};
	/*	function teste(){
				id = '555';
				name = 'nome';
				lista = "<a href='#' value='"+id+"' onclick='connect("+id+")'>"+name+"</a><br>";
				document.getElementById("dispositivos").innerHTML = lista;
	};*/