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
	function connect(link){ 
		document.getElementById("dispositivos").innerHTML = "";
		document.getElementById("status").innerHTML = link;
		var string = document.getElementById("hidden").value;
									
				var mac = string.split(";");		
				var quantidade = mac.length;
				var quantidade = quantidade - 1;
				
				for (contador = 0; contador < quantidade; contador++){
					if(mac[contador] == link){
							alert("Conectado");
					}
				}
													
	};
	function buscar(){ 
		bluetoothSerial.discoverUnpaired(function(devices){
			devices.forEach(function(device){
				var link = '';
				link = '"'+device.id+'"';
				alert("ate aqui"+link);
				lista += "<a href='#' onclick='connect("+link+")'>"+device.name+"</a><br>";
				document.getElementById("dispositivos").innerHTML = lista;
				})								
		});		
		
	};
	