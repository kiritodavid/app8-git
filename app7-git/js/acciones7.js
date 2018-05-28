// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizó a la izquierda",function(){"aplicaión 7","Aceptar"});
		});//cierre deslizar izquierda
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Qué quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notification.beep(2);
					break;
					
					case 2:
					navigator.notification.vibrate(2000);
					break;
				}
			},"aplicación 7","Beepear,Vibrar,Cancelar");
		}); //cierre del deslizar a la derecha
	},false); //cierre del deviceready
});//cierre del document principal
					