	var app = {	
		
		};
	function connect(){		
				alert('#1-Connect');
				
					bluetoothSerial.list(function(devices){
						devices.forEach(function(device){
									alert(device.id);
									})
									},alert('Erro'););
									
	};