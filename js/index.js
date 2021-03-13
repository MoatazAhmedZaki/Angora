$(document).ready(function(){
	
	
	$(".loader .sk-fading-circle").fadeOut(2000 , function(){
		
		$(".loader").fadeOut(2000 , function(){
			
			$("body").css("overflow","auto")
		})
	})
})

$('.owl-carousel').owlCarousel({
    center:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




if(innerWidth< 1000)
{
    $(".navbar-toggler i").css("color" ,"white");
             
$(".container-fluid.bord").css("position", "fixed") ;
    
}

$(window).scroll(function(){
        if(($(window).scrollTop() > $(".navbar-toggler").height()) 
           && (innerWidth < 1000)
          ){
            
            
             $(".navbar-brand img").attr("src", "images/logo-black.png");
               $(".bord i").css("color", "black") ;
            $(".navbar-toggler").css("background-color", "white") ;
             $(".navbar-brand").css("background-color", "white") ;
             $(".navbar-brand").css("padding", "5px 15px") ;
             $(".navbar-brand").css("border-radius", "5px ") ;
              $(".bord").css("padding-top", "0px");

        }
   
        
        else if(($(window).scrollTop() < $(".container-fluid.bord").height()) 
           && (innerWidth < 1000)
               ){
           $(".navbar-brand img").attr("src", "images/logo-white.png");
             $(".navbar-toggler").css("background-color", "transparent") ;
 $(".bord i").css("color", "white") ;
            $(".navbar-toggler").css("border", "white") ;
            
            $(".navbar-brand").css("background-color", "transparent") ;
             $(".navbar-brand").css("padding", "0px") ;
        }
    });




    $(window).scroll(function(){
        if(($(window).scrollTop() > $(".container-fluid.bord").height()) 
           && (innerWidth > 1000)
          ){
            $(".navbar-brand img").attr("src", "images/logo-black.png");
            $(".container-fluid.bord").addClass("bg-light");
             $(".navbar").removeClass("navbar-light");
            $(".navbar").addClass("navbar-dark");
              $(".container-fluid.bord").css("position", "fixed") ;
            
            $(".navbar-dark .navbar-nav .nav-link ").css("color", "black") ;
            
            $(".bord i").css("color", "black") ;
            $(".navbar").css("padding-top", "5px");
            $(".navbar").css("padding-bottom", "5px");
             $(".bord").css("padding-top", "0px");


               

        }
   
        
        else if(($(window).scrollTop() < $(".container-fluid.bord").height()) 
           && (innerWidth > 1000)
               ){
            $(".navbar-brand img").attr("src", "images/logo-white.png");
        $(".container-fluid.bord").removeClass("bg-light");
             $(".container-fluid.bord ").removeClass("navbar-dark");
              $(".container-fluid.bord").css("position", "absolute") ;
         $(".navbar-dark .navbar-nav .nav-link ").css("color", "white") ;
                        $(".bord i").css("color", "white") ;
             $(".navbar").css("padding-top", "10px");
            $(".navbar").css("padding-bottom", "25px");

        }
    });




$('ul.navbar-nav').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $($href).offset();
$('body').animate({ scrollTop: $anchor.top-50 },1500);
    
     $(this).addClass("active");
      
$(this).parent().siblings().children().removeClass("active");
   
    return false;
});




$(".to-top").click(function(){
    
    $("body").animate({scrollTop:'0'} , 1500)
});

var contact = $("#num-14").offset()

$(".Contact-Us").click(function(){
    
$('body').animate({ scrollTop:contact.top-50 },1500);
});

