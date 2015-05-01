flag=true;

$(document).ready(function(){
	var headerHeight = $('.header').height();
	var height = $(window).height();
	var width = $(window).width();
	$(".sideBar").css("marginTop", headerHeight+4)
	$("#mainBar").css("marginTop", headerHeight+4)
	if(width > 640){
		$(".sideBar").css("height", height-headerHeight)
	}
});

$( document ).ready(function() {
    // bind a click event to the 'skip' link
    $(".skip").click(function(event){

        // strip the leading hash and declare
        // the content we're skipping to
        var skipTo="#"+this.href.split('#')[1];

        // Setting 'tabindex' to -1 takes an element out of normal 
        // tab flow but allows it to be focused via javascript
        $(skipTo).attr('tabindex', -1).on('blur focusout', function () {

            // when focus leaves this element, 
            // remove the tabindex attribute
            $(this).removeAttr('tabindex');

        }).focus(); // focus on the content container
    });
});

$(window).resize(function(){
	var headerHeight = $('.header').height();
	var height = $(window).height();
	var width = $(window).width();
	$(".sideBar").css("marginTop", headerHeight+4)	
	$("#mainBar").css("marginTop", headerHeight+4)
	if(width > 640){
		$(".sideBar").css("height", height-headerHeight)
	}else if(width < 640){
		$(".sideBar").css("height", "100%")
	}
});

function changeLang(language){
	// alert($('html')[0].lang);
	if(language == 1){
		toScroll = $(document).scrollTop();
		var indexLang = window.location.href.indexOf("lang", 0);	 	
		window.location.href = "index.html?lang=fr?y="+toScroll;
	}else if(language == 0){
		toScroll = $(document).scrollTop();
		var indexLang = window.location.href.indexOf("lang", 0);	 	
		window.location.href = "index.html?lang=en?y="+toScroll;
	}
}

$(function(){
	var indexLang = window.location.href.indexOf("lang", 0);
	var temp = window.location.href.substring(indexLang+5, indexLang+7)

	var result = /[^"y="]*$/.exec(window.location.href)[0];
	// alert(result);
	window.onload = function () {
        window.scrollTo(0, result);
    }

	document.getElementsByTagName('html')[0].setAttribute('lang',temp);
	if($('html')[0].lang == "en"){
		$('.FRE').remove();
		document.title = "Information Officer";
	}else{
		$('.ENG').remove();
		document.title = "Guide du préposé à l'information";
	}
});

$.fn.scrollView = function () {	
	if($(".sideBar").css("position") == "static"){
		return this.each(function () {
	        $('html, body').animate({
	            scrollTop: $(this).offset().top
	        }, 500);
	    });
	}else{
		// alert($(window).height());
		var height = $(window).height();
		var width = $(window).width();
		var headerHeight = $('.header').height();
		// alert((height * 0.03) + 20);
		// alert(width);
		if(width <= 1366){
			// alert("1");
			return this.each(function () {
		        $('html, body').animate({
		            scrollTop: $(this).position().top - headerHeight - 4
		        }, 500);
		    });
		}else{
			// alert("2");
			return this.each(function () {
		        $('html, body').animate({
		            scrollTop: $(this).position().top - headerHeight
		        }, 500);
		    });
		}		
	}
}
