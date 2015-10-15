	var app = {		
			connectSuccess: function(){
			status = "Conectado.<br>";
			document.getElementById("status").innerHTML = status;
			alert('Conectado');
			},
			connectFailure: function(){
			status = "Falha na conexao.<br>";
			document.getElementById("status").innerHTML = status;
			alert("Error");
			},
	};		
	function buscar(){ 
		var lista = '';
		bluetoothSerial.discoverUnpaired(function(devices){
			devices.forEach(function(device){
				var link = '';
				link = '"'+device.id+'"';
				lista += "<a href='#' onclick='connect("+link+")'>"+device.name+"</a><br>";
				//lista += device.id+";";
				document.getElementById("dispositivos").innerHTML = lista;
				//document.getElementById("hidden").innerHTML = lista;
				})								
		}, alert("Error #3"));				
	};
	function list(){ 
					var lista = "";
					bluetoothSerial.list(function(devices) { //---- bluetoothSerial.list
					devices.forEach(function(device) {
						var link = '';
							link = '"'+device.id+'"';
							lista += "<a href='#' onclick='connect("+link+")'>"+device.name+"</a><br>";
							document.getElementById("dispositivos").innerHTML = lista;
					})
				});		
	};
	function connect(link){ 
	document.getElementById("dispositivos").innerHTML = "";
	document.getElementById("dispositivos").innerHTML = link;
	bluetoothSerial.connect(link, app.connectSuccess, app.connectFailure);
	
	/*	
		var string = document.getElementById("hidden").value;
									
				var mac = string.split(";");		
				var quantidade = mac.length;
				var quantidade = quantidade - 1;
				
				for (contador = 0; contador < quantidade; contador++){
					if(mac[contador] == link){
							alert("Conectado");
					}
				}*/
	};
	
	