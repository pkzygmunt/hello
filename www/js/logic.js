
function change(){
	$.mobile.changePage("#interface", { transition: "slide"});
}

function loadContent(){
		showLoading("");
		$(".toLoad").fadeIn("slow",function(){
			setTimeout("change()",3000);
		})
		
		
	}

$(function(){
	
	
	if($("#startPage").hasClass("ui-page-active")){
		setTimeout("loadContent()",3000);
	}
	
});