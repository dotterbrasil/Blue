	var app = {	
			connectSuccess: function(){
			status = "<input value='Conectado.'/><br>";
			document.getElementById("status").innerHTML = status;
			},
			connectFailure: function(){
			alert('Falha na conexao.');
			status = "<input value='Falha na conexao.'/><br>";
			document.getElementById("status").innerHTML = status;
			}
		};
	function list(){ 
					var lista = "";
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){
									var link = '';
									link = '"'+device.id+'"';
									lista += "<a href='#' onclick='connect("+link+")'>"+device.name+"</a><br>";
									document.getElementById("dispositivos").innerHTML = lista;
								})
							});			
	};
	function connect(link){
		alert(link);
		bluetoothSerial.connect(link, app.connectSuccess, app.connectFailure);
	};