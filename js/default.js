var w = 668;
var h = 700;

function winOpen(id){
	window.open('/sys/girl_pc.php?id='+id,'','width='+w+',height='+h+',scrollbars=yes');
}

var w_vip = 650;
var h_vip = 640;

function winOpenVip(url){
	window.open(url,'','width='+w_vip+',height='+h_vip+',scrollbars=no');
}

function GetHeight(ID,NAME){
	if (document.height){
		document.getElementById(ID).style.height = parent.frames[NAME].document.height +20 +"px" ;
	}else{
		document.getElementById(ID).style.height = parent.frames[NAME].document.body.scrollHeight +20 +"px";
	}
}

// ポップアップウィンドウ
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}


$(function() {
	
var w_size = 668;
var h_size = 700;

	$('a[href*="/sys/girl_pc.php"]').addClass("popup");

	$("a.popup").click(function(){
		window.open(this.href, "", "width="+w_size+", height="+h_size+", scrollbars=yes");
		return false;
	});
	


var w_size = 668;
var h_size = 700;

	if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
		$('a[href*="/girls/girl.php"]').each(function() {
			var obj = $(this);
			var link = obj.attr("href");
			obj.attr('href', link+'&tpl=3');
		});	
	}else {
		$('a[href*="/girls/girl.php"]').addClass("popup");
	}

	$("a.popup").click(function(){
		window.open(this.href, "", "width="+w_size+", height="+h_size+", scrollbars=yes");
		return false;
	});

});
