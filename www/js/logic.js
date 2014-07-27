var imgH;
var levels = {
		0 : {
			0 : "Nieświadomy rurkowiec",
			1 : "Palikociarz",
			2 : "Tfu, g*j",
			3 : "Odbiera obywatelom 83% pieniędzy",
			4 : "Ogląda tylko telewizje reżymową",
			5 : "Po prostu się Panem brzydzę , rozumiesz Pan?",
			6 : "Pan się kompromituje z każdym słowem",
			7 : "Faszyzm to mało powiedziane, to jest SOCJALIZM !, Euro-socjalizm",
			8 : "Czy się stoi czy się leży 2 patyki się należy",
			9 : "Czy to będzie Hitler czy Kwaśniewski , wszystkich socjalistów mam gdzieś!",
			10 : "Między babą z brodą a murzynem, takim z 20 calowym",
			11 : "Bezkobiecie to najgorsza rzecz dla mężczyzny, wydajmy rozporządzenie żeby Pani musiała zatańczyć z niskim Panem",
			12 : "Za komuny żyłem, ale wiedziałem że to komuna",
			13 : "Unia Europejska - Aferzyści wszystkich krajów łączcie się",
			14 : "Bolszewik, ma szczęście że JKM nie przechadzał się w 1917 ulicami St. Petersburga",
			15 : "Nieprawdopodobna dawka socjalizmu",
			16 : "Wieczny student, nierób",
			17 : "Jedziemy do Euro Parlementu z przesłaniem, które Piłsudski by streścił : Bić  kurwy i złodziei ",
			18 : "Boni wychodź, droga wolna",
			19 : "Mury Jerycha upadły od trąb",
			20 : "Dobry czerwony to... ?",
			21 : "Średni poziom",
			22 : "Zawsze pierwszy po zasiłek",
			23 : "Smakowite koryto w brukseli",
			24 : "Socjalista, beneficjent zasiłków",
			25 : "Komunista",
			26 : "Tfu, d****rata",
			27 : "Typowy rurkowiec",
			28 : "Nieświadomy rurkowiec"
		}	
};
console.log(levels);
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
		"top" : imgH-40
	},{duration:1000,complete:function(){
		$(".hit-scan").animate({
			"top" : 0
		},{duration:1000,complete:function(){
			var src = $("#np-fd-image").attr("src");
			$("#to-hit").attr("src",src);
			var rand = Math.floor((Math.random() * 28) + 1); 
			$("#interface-hit .desc .txt").html(levels[0][rand]);
			$("#lv-int").html("Poziom lewactwa :<b>"+rand+"</b>");
			$.mobile.changePage("#interface-hit", { transition: "slide"});
			
		}
		});
		
	}
	});
}
function refreshText(){
	var rand = Math.floor((Math.random() * 28) + 1); 
	$("#interface-hit .desc .txt").html(levels[0][rand]);
	
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