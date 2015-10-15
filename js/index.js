	var app = {			
			connectSuccess: function(){
				status = "Conectado";
				document.getElementById("status").innerHTML = status;
				localStorage.setItem("verificacao", status);	
				alert(status);						
				setTimeout(app.time, 3000);
			},
			connectFailure: function(){
				status = "Falha na conexao";
				document.getElementById("status").innerHTML = status;
				localStorage.setItem("verificacao", status);
				alert(status);
			},			
			time: function(){			
				var link = localStorage.getItem("carro");				
				var status = localStorage.getItem("verificacao");					
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
	
	