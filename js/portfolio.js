$(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
        $(".header").addClass("active");
    } else {
        $(".header").removeClass("active");
    }
})

//about animation
$(document).ready(() => {
    $(window).scroll(() => {
        let portfolio = $(document).scrollTop();


        if ((portfolio > 450) && (portfolio < 700)) {
            $('#about-anim').addClass('animate__animated animate__zoomIn')
            $('#about2-anim').addClass('animate__animated animate__zoomIn')
        }
        // our services animation
        else  if ((portfolio > 1020) && (portfolio < 1500)) {
            $('#Serv-text').addClass('animate__animated animate__zoomIn');
            $('#card-one').addClass('animate__animated animate__fadeInLeft');
            $('#card-2').addClass('animate__animated animate__zoomIn');
            $('#card-three').addClass('animate__animated animate__fadeInRight');
        }
        //skill animation
        else if( (portfolio > 1500) && (portfolio < 2000)) {
            $('#skill-anim').addClass('animate__animated animate__zoomIn')
        } 
        //contact animation
        else if((portfolio > 2850) && (portfolio < 2900)) {
            $('#cont-anim').addClass('animate__animated animate__zoomIn')
            $('#cont2-anim').addClass('animate__animated animate__zoomIn')
            $('#cont3-anim').addClass('animate__animated animate__zoomIn')
        }
        //footer animation 
        else if( (portfolio > 3100) && (portfolio < 3500)) {
            $('#footer-anim').addClass('animate__animated animate__zoomIn')
        }

    })
})
