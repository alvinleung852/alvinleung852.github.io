$(document).ready(function() {
	// hide content on load
	$('.content').hide();

	//remember the last content page visited
	var lastContent;
	var temp; 

	//click on main circle function
	$('.circle').click(function() {	
		temp = this.classList;
		$('.' + temp[0] + '_content').show();
		$('.' + temp[0] + '_content').animate({
            height: '100%',
            }, 350, function() {
        }); 
        $('.name').css('top', 'auto');  
        $('.name').animate({
        	bottom: '10px',        	
        	}, 350, function() {
        });        
        $('.wrapper').slideToggle(400);   
        lastContent = temp[0];
    });

	//close content function
	$('.close_content').click(function() {		
        $('.content').animate({
            height: '0%',
            }, 350, function() {
        });
        $('.name').css('bottom', 'auto'); 
        $('.name').css('top', '-50px'); 
        $('.name').animate({
        	top: '10px',        	
        	}, 350, function() {
        });   
        $('.content').hide(350);  
        $('.wrapper').slideToggle(300);
    });

	//navigate across section function
    $('.cross_link').click(function() {	
        $('.' + lastContent + '_content').fadeOut(350);    
    	$('.' + lastContent + '_content').animate({
            height: '0%',
            }, 350, function() {
        });
    	$('.' + lastContent + '_content').hide(350); 	
        temp = this.classList;
		$('.' + temp[0] + '_content').show();
		$('.' + temp[0] + '_content').animate({
            height: '100%',
            }, 350, function() {
        });
        lastContent = temp[0];
    });
});

