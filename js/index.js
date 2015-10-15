	var app = {				
			time: function(){	
				alert('Dentro do loop');
				document.getElementById("status").innerHTML = '...';
				var link = localStorage.getItem("carro");
				var status = localStorage.getItem("dispositivo");
				
				if(status == 'desconectado'){
					alert('Dispositivo desconectado, tenta conexao');
					bluetoothSerial.connect(link, app.conectado, app.desconectado);
				}else{
					alert('Dispositivo conectado, verificaconexao conexao');
					bluetoothSerial.isConnected(app.conectado, app.desconectado);	
					}
			},					
			conectado: function(){
				alert('Conectado');
				document.getElementById("status").innerHTML = 'Continua conectado';
				localStorage.setItem("dispositivo", "conectado");
				setTimeout(app.time, 3000);
			},
			desconectado: function(){
				alert('Dispositivo desconectado!');
				document.getElementById("status").innerHTML = "Dispositivo desconectado!";
				localStorage.setItem("dispositivo", "desconectado");
				setTimeout(app.time, 3000);
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
		document.getElementById("dispositivos").innerHTML = 'Dispositivo selecionado:'+link;
		localStorage.setItem("carro", link);	
		localStorage.setItem("dispositivo", "desconectado");
		setTimeout(app.time, 3000);			
	};
	
	