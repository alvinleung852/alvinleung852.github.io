
$(document).ready(function() {
	// hide content on load
    $("#mygallery").justifiedGallery({ 
                randomize : true,
                margins: 20,
                rowHeight: 300,
            });
	$('.content').hide();
    $('.nav_wrapper').hide();


    //change height of blog content
    var screenHeight = $(window).height();
    // alert(screenHeight);
    $('.scrollable_content').height(screenHeight - 125 + 'px');
    $('.portfolio_gallery').height(screenHeight - 125 + 'px');

	//remember the last content page visited
	var lastContent;
	var temp;    

    $('.years').click(function() {         
        var temp2 = this.classList;
        // alert(temp2[0]);
        $('#' + temp2[0] + 'months').toggleClass('selected_year');
        $('#' + temp2[0] + 'content').toggleClass('selected_year');
        for(var i = 2012; i <= 2014; i++){
            if(i != temp2[0]){
                $('#' + i + 'months').removeClass('selected_year');
                $('#' + i + 'content').removeClass('selected_year');
            }            
        }
    });      

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
        $('.wrapper').slideToggle('fast');   
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
        $('.wrapper').slideToggle('fast');
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
        if(temp[2] == 'blogJump'){
            // alert(temp[2]);
            // var currentlySelected = 0;
            // var temp2 = $('#' + temp[3] + 'months').classList;
            // for (var j = 0; j < temp2.length; j++){
            //     if(temp2[j] == 'selected_year'){
            //         currentlySelected = 1;
            //     }
            // }
            // if(currentlySelected == 1){
                $('#' + temp[3] + 'months').addClass('selected_year');
                $('#' + temp[3] + 'content').addClass('selected_year');
                for(var i = 2012; i <= 2014; i++){
                    if(i != temp[3]){
                        $('#' + i + 'months').removeClass('selected_year');
                        $('#' + i + 'content').removeClass('selected_year');
                    }            
                }
            // }
            
            document.getElementById(temp[1]).scrollIntoView();
        }
        
    });
});

// change blog screen height on screen resize
$(window).resize(function(){
    var screenHeight = $(window).height();
    // alert(screenHeight);
    $('.scrollable_content').height(screenHeight - 125 + 'px');
    $('.portfolio_gallery').height(screenHeight - 125 + 'px');
});
