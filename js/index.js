	var app = {			
			connectSuccess: function(){
				alert("Conectado");
				document.getElementById("status").innerHTML = "Conectado";									
				setTimeout(app.time, 3000);
			},
			connectFailure: function(){
				alert("Falha na conexao");
				document.getElementById("status").innerHTML = "Falha na conexao";				
			},			
			time: function(){	alert('Começou o time.');		
				var link = localStorage.getItem("carro");							
					bluetoothSerial.connect(link, app.connectSuccess, app.connectFailure);			
			},		
	};			
	function list(){
					document.getElementById("status").innerHTML = '';
					var lista = "";
					bluetoothSerial.list(function(devices) {
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
		document.getElementById("dispositivos").innerHTML = 'Device: '+link;
		localStorage.setItem("carro", link);
		
		bluetoothSerial.connect(link, app.connectSuccess, app.connectFailure);
	};
	
	