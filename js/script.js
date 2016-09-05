$(document).ready(function(){
  $("h1").animate({opacity: 1}, 2000);
		
	$("#about").click(function(){
	  $(this).addClass("filled");
		$("#projects").removeClass("filled");
		$("#projectsPar").fadeOut(500, function(){
		  $("#aboutPar").fadeIn(500);
		});
	});	
	
	$("#projects").click(function(){
		$(this).addClass("filled");
		$("#about").removeClass("filled");
		$("#aboutPar").fadeOut(500, function(){
			$("#projectsPar").fadeIn(500);
		});
	});
});
