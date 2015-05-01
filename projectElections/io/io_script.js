
$(window).scroll(function() {
    if (isScrolledIntoView("#title1") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic1').addClass("sideBarHighlight");
    } else if (isScrolledIntoView("#title2") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic2').addClass("sideBarHighlight");
    }else if (isScrolledIntoView("#title3") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic3').addClass("sideBarHighlight");
    }else if (isScrolledIntoView("#title4") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic4').addClass("sideBarHighlight");
    }else if (isScrolledIntoView("#title5") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic5').addClass("sideBarHighlight");
    }else if (isScrolledIntoView("#title6") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic6').addClass("sideBarHighlight");
    }else if (isScrolledIntoView("#title7") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic7').addClass("sideBarHighlight");
    }else if (isScrolledIntoView("#title8") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic8').addClass("sideBarHighlight");
    }else if (isScrolledIntoView("#title9") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic9').addClass("sideBarHighlight");
    }else if (isScrolledIntoView("#title10") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic10').addClass("sideBarHighlight");
    }else if (isScrolledIntoView("#title11") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic11').addClass("sideBarHighlight");
    }else if (isScrolledIntoView("#title12") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic12').addClass("sideBarHighlight");
    }else if (isScrolledIntoView("#title13") == true) {
        $("div").removeClass("sideBarHighlight");
        $('.topic13').addClass("sideBarHighlight");
    }
});

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// $(window).scroll(function() {
//     st=$(window).scrollTop();
//     var height = $(window).height();
//     $('#topscroll').html(st);
//     if(height > 768){
//         if(st <450){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic1').addClass("sideBarHighlight");
//         }
//         else if(st>450 && st < 850){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic2').addClass("sideBarHighlight");
//         }
//         else if(st>850 && st < 1500){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic3').addClass("sideBarHighlight");
//         }
//         else if(st>1500 && st < 2800){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic4').addClass("sideBarHighlight");
//         }
//         else if(st>2800 && st < 4700){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic5').addClass("sideBarHighlight");
//         }
//         else if(st>4700 && st < 5800){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic6').addClass("sideBarHighlight");
//         }
//         else if(st>5800 && st < 6700){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic7').addClass("sideBarHighlight");
//         }
//         else if(st>6700 && st < 7300){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic8').addClass("sideBarHighlight");
//         }
//         else if(st>7300 && st < 8400){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic9').addClass("sideBarHighlight");
//         }
//         else if(st>8400 && st < 9600){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic10').addClass("sideBarHighlight");
//         }
//         else if(st>9600 && st < 10700){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic11').addClass("sideBarHighlight");
//         }
//         else if(st>10700 && st < 11100){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic12').addClass("sideBarHighlight");
//         }
//         else if(st>11100 && st < 11600){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic13').addClass("sideBarHighlight");
//         }
//     }else{
//         if(st <450){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic1').addClass("sideBarHighlight");
//         }
//         else if(st>450 && st < 850){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic2').addClass("sideBarHighlight");
//         }
//         else if(st>850 && st < 1500){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic3').addClass("sideBarHighlight");
//         }
//         else if(st>1500 && st < 2500){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic4').addClass("sideBarHighlight");
//         }
//         else if(st>2500 && st < 4100){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic5').addClass("sideBarHighlight");
//         }
//         else if(st>4100 && st < 5300){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic6').addClass("sideBarHighlight");
//         }
//         else if(st>5300 && st < 6200){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic7').addClass("sideBarHighlight");
//         }
//         else if(st>6200 && st < 6900){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic8').addClass("sideBarHighlight");
//         }
//         else if(st>6900 && st < 7600){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic9').addClass("sideBarHighlight");
//         }
//         else if(st>7600 && st < 8500){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic10').addClass("sideBarHighlight");
//         }
//         else if(st>8500 && st < 9600){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic11').addClass("sideBarHighlight");
//         }
//         else if(st>9600 && st < 10200){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic12').addClass("sideBarHighlight");
//         }
//         else if(st>10200 && st < 11600){
//             $("div").removeClass("sideBarHighlight");
//             $('.topic13').addClass("sideBarHighlight");
//         }
//     }
    
// });

