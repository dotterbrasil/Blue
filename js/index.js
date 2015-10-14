	var app = {	
			connectSuccess: function(){
			status = "Conectado.<br>";
			document.getElementById("status").innerHTML = status;
			},
			connectFailure: function(){
			status = "Falha na conexao.<br>";
			document.getElementById("status").innerHTML = status;
			}
		};
	function list(){ 
					var lista = "";
					bluetoothSerial.list(function(devices) {
					devices.forEach(function(device) {
						var link = '';
							link = '"'+device.id+'"';
							lista += "<a href='#' onclick='connect("+link+")'>"+device.name+"</a><br>";
							document.getElementById("dispositivos").innerHTML = lista;
					})
				}, failure);		
	};
	function connect(link){
		alert(link);
		bluetoothSerial.connectInsecure(link, app.connectSuccess, app.connectFailure);
	};
	/*function list(){ 
					var lista = "";
					bluetoothSerial.discoverUnpaired(function(devices){
						devices.forEach(function(device){
									var link = '';
									link = '"'+device.id+'"';
									lista += "<a href='#' onclick='connect("+link+")'>"+device.name+"</a><br>";
									document.getElementById("dispositivos").innerHTML = lista;
								})
							});			
	};*/