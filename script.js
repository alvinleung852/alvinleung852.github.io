$(document).ready(function() {
	// hide content on load
	$('.content').hide();
    $('.nav_wrapper').hide();

    //change height of blog content
    var screenHeight = $(window).height();
    // alert(screenHeight);
    $('.scrollable_content').height(screenHeight - 125 + 'px');

	//remember the last content page visited
	var lastContent;
	var temp; 

	//click on main circle function
	$('.circle').click(function() {	
		temp = this.classList;
        $('.' + temp[0]).find('h1').replaceWith(function(){
            return '<h2>' + $(this).text() +'</h2>';
        });
		$('.' + temp[0] + '_content').show();
		$('.' + temp[0] + '_content').animate({
            height: '100%',
            }, 300, function() {
        }); 
        $('.nav_wrapper').fadeIn(350);    
        $('.wrapper').slideToggle(400);   
        lastContent = temp[0];
    });

	//close content function
	$('.close_content').click(function() {	
        $('.' + lastContent).find('h2').replaceWith(function(){
            return '<h1>' + $(this).text() +'</h1>';
        });	
        $('.content').animate({
            height: '0%',
            }, 300, function() {
        });
        $('.nav_wrapper').fadeOut(350);
        $('.content').hide(350);  
        $('.wrapper').slideToggle(300);
    });

	//navigate across section function
    $('.cross_link').click(function() {
        temp = this.classList;
    	if(temp[0] != lastContent){
            $('.' + lastContent).find('h2').replaceWith(function(){
                return '<h1>' + $(this).text() +'</h1>';
            });
            $('.' + lastContent).toggleClass('cross_link');

            $('.' + lastContent + '_content').fadeOut(350);    
        	$('.' + lastContent + '_content').animate({
                height: '0%',
                }, 350, function() {
            });
        
            $('.' + temp[0]).find('h1').replaceWith(function(){
                return '<h2>' + $(this).text() +'</h2>';
            });
            $('.' + temp[0] + '_content').show();
            $('.' + temp[0] + '_content').animate({
                height: '100%',
                }, 350, function() {
            });
            lastContent = temp[0];
        }
        
    });
});

// change blog screen height on screen resize
$(window).resize(function(){
    var screenHeight = $(window).height();
    // alert(screenHeight);
    $('.scrollable_content').height(screenHeight - 125 + 'px');
});
