	var app = {	
			connectSuccess: function(){
			alert('Conectado.');
			},
			connectFailure: function(){
			alert('Falha na conexao.');
			}
		};
	function list(){ alert();
					var lista = "";
					var i = "";
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){	
									link = '"'+device.id+'"';
									lista += "<a href='#' onclick='connect("+link+")'>"+device.name+"</a><br>";
									document.getElementById("dispositivos").innerHTML = lista;
								})
							});			
	};
	function connect(link){
		alert(link);
		//bluetoothSerial.connect(device, app.connectSuccess, app.connectFailure);
	};
	/*	function teste(){
		
		var cars = ["BMW", "Volvo", "Saab", "Ford"];
				var lista = "";
				var i;
				for (i = 0; i < cars.length; i++) {
					link = '"'+cars[i]+'"';
					lista += "<a href='#' name='"+cars[i]+"' id='"+cars[i]+"' value='"+cars[i]+"' onclick='connect("+link+")'>"+cars[i]+"</a><br>";
				}					
					document.getElementById("dispositivos").innerHTML = lista;					
	};*/