$(document).ready(function(){

	// generate photo lineup
	$('img.marquee_panel_photo').each(function(index){
		var photoWidth = $('.marquee_container').width();
		var photoPosition = index * photoWidth;
		$('.marquee_photos').append('<img class="marquee_photo" style="left:' + photoPosition + '" src="' + $(this).attr('src') +'" alt="'+$(this).attr('alt')+'" width="'+photoWidth+'" height="350" />');
		$('.marquee_photos').css('width', photoPosition+photoWidth);
	});
	
	// generate navigation links
	$('.marquee_panels .marquee_panel').each(function(index){
		$('.marquee_nav').append('<a class="marquee_nav_item"></a>')
	});
	
	// set up navigation links
	$('.marquee_nav a.marquee_nav_item').click(function(){
	
		$('.marquee_nav a.marquee_nav_item').removeClass('selected');
		$(this).addClass('selected');
	});

















});