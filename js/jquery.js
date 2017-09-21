// JavaScript Document

$(document).ready(
	function(){
		$(".photo img").hover(function(){
			$(this).fadeTo("fast", 0.0); // マウスオーバーで透明度を0%にする
		},function(){
			$(this).fadeTo("fast", 1.0); // マウスアウトで透明度を100%に戻す
		});
	});

jQuery(document).ready(function($) {
	$('a').focus(function(){this.blur();});
});