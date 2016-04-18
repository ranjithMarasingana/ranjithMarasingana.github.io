$(document).ready(function(){

	$(".itcimage").hide();
	$(".itcimage2").hide();
	$(".ctext").hide();
	$(".itext").hide();
	$(".Hoveruta").mouseenter(function(){
		
		$("#utaHoverImg").slideDown("fast");
		$("#utaText1ID").fadeIn("slow");
		$("#utaText2ID").fadeIn("slow");
	});
	$(".Hovercmr").mouseenter(function(){
		
		$("#cmrHoverImg").slideDown("fast");
		$("#cmrText1ID").fadeIn("slow");
		$("#cmrText2ID").fadeIn("slow");
	});

	$(".Hovercf").mouseenter(function(){

		$("#cfHoverImg").slideDown("fast");
		$("#cfText1ID").fadeIn("slow");
		$("#cfText2ID").fadeIn("slow");
	});
	$(".Hoveritc").mouseenter(function(){

		$("#itcHoverImg").slideDown("fast");
		$("#itcText1ID").fadeIn("slow");
		$("#itcText2ID").fadeIn("slow");
	});


	$(".Hoveruta").mouseleave(function(){
	

	$("#utaHoverImg").slideUp("slow");
	$("#utaText1ID").fadeOut("fast");
	$("#utaText2ID").fadeOut("fast");

	});
	$(".Hovercmr").mouseleave(function(){
	

	$("#cmrHoverImg").slideUp("slow");
	$("#cmrText1ID").fadeOut("fast");
	$("#cmrText2ID").fadeOut("fast");

	});
	$(".Hovercf").mouseleave(function(){

	$("#cfHoverImg").slideUp("slow");
	$("#cfText1ID").fadeOut("fast");
	$("#cfText2ID").fadeOut("fast");

});
	$(".Hoveritc").mouseleave(function(){

	$("#itcHoverImg").slideUp("slow");
	$("#itcText1ID").fadeOut("fast");
	$("#itcText2ID").fadeOut("fast");

});

function toggleChevron(e){
	//find the event, then previous sibling then the icons class and finally toggle it.
	$(e.target).prev('.panel-heading').find("i.indicator").toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse',toggleChevron);
$('#accordion').on('shown.bs.collapse',toggleChevron);
$('#accordion').on('shown.bs.collapse',makeBold);
$('#accordion').on('hidden.bs.collapse',makeNormal);

function makeBold(e){
	$(e.target).prev('.panel-heading').find('.panel-title a, .panel-title a i').addClass('fontWeight');
}
function makeNormal(e){
	$(e.target).prev('.panel-heading').find('.panel-title a, .panel-title a i').removeClass('fontWeight');
}

//$('.panel-title a').click(function(){
//$('.panel-title a').removeClass('fontWeight');
//$(this).addClass('fontWeight');
//});



});
function uta(){
$('#uta').modal('show');
}