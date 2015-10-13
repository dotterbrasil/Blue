	var app = {	
		
		};
	function connect(){		
				alert('#1-Connect');
				
						
		//Opens Bluetooth.
		BC.Bluetooth.OpenBluetooth(function()
									{
										alert("bluetooth opened!");
									},
									function()
									{
										alert("bluetooth open error!");
									});
				alert('#2-Connect');
	};
	function lista(){		
				alert('#1-Lista');
				
		BC.Bluetooth.GetConnectedDevices(function(mes)
											{
											alert(JSON.stringify(mes));
											});
				alert('#2-Lista');
	};
	function desconectar(){		
				alert('#1-Desconectar');
				
		BC.Bluetooth.CloseBluetooth(function()
									{
									alert("bluetooth closed!");
									},
									function()
									{
									alert("bluetooth close error!");
									});
				alert('#2-Desconectar');
			};
	function pareados(){		
				alert('#1-Pareados');
		BC.Bluetooth.GetPairedDevices(function(mes)
										{
										alert(JSON.stringify(mes));
										});
				alert('#2-Pareados');
			
			};