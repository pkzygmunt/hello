var imgH;
function change(){
	$.mobile.changePage("#interface", { transition: "slide"});
}

function loadContent(){
		showLoading("");
		$(".toLoad").fadeIn("slow",function(){
			setTimeout("change()",3000);
		})
		
		
	}

function scanning(){
	
	$(".hit-scan").animate({
		"top" : imgH
	},{duration:4000,complete:function(){
		$(".hit-scan").animate({
			"top" : 0
		},{duration:4000});
		
	}
	});
}
function scanPhoto(){
	imgH = $(".hit-container").height();
	$(".hit-scan").fadeIn();
	scanning();
}

$(function(){
	
	
	if($("#startPage").hasClass("ui-page-active")){
		setTimeout("loadContent()",3000);
	}
	
});