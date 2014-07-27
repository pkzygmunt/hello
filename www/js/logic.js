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
		"top" : imgH-10
	},{duration:4000,complete:function(){
		$(".hit-scan").animate({
			"top" : 0
		},{duration:4000,complete:function(){
			var src = $("#np-fd-image").attr("src");
			$("#to-hit").attr("src",src);
			$.mobile.changePage("#interface-hit", { transition: "slide"});
			
		}
		});
		
	}
	});
}
function scanPhoto(){
	$("#scanBtt").hide();
	imgH = $(".hit-container").height();
	$(".hit-scan").fadeIn();
	scanning();
}

$(function(){
	
	
	if($("#startPage").hasClass("ui-page-active")){
		setTimeout("loadContent()",3000);
	}
	
});