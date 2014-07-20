function loadContent(){
		
		$(".toLoad").show("slow");
		navigator.notification.alert("chuj");
	}
$(function(){
	
	
	
	setTimeout("loadContent",3000);
	
});