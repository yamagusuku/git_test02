// JavaScript Document

$(document).ready(
	function(){
		$(".photo img").hover(function(){
			$(this).fadeTo("fast", 0.0); // �}�E�X�I�[�o�[�œ����x��0%�ɂ���
		},function(){
			$(this).fadeTo("fast", 1.0); // �}�E�X�A�E�g�œ����x��100%�ɖ߂�
		});
	});

jQuery(document).ready(function($) {
	$('a').focus(function(){this.blur();});
});