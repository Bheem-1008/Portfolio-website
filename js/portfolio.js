$(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
        $(".header").addClass("active");
    } else {
        $(".header").removeClass("active");
    }
})

// animation
$(document).ready(() => {
    $(window).scroll(() => {
        let portfolio = $(document).scrollTop();


        if ((portfolio > 400) && (portfolio < 500)) {
            $('#about-anim').addClass('animate__animated animate__zoomIn')
            $('#about2-anim').addClass('animate__animated animate__zoomIn')
        }
        // our services animation
        else  if ((portfolio > 910) && (portfolio < 1000)) {
            $('#Serv-text').addClass('animate__animated animate__zoomIn');
            $('#card-one').addClass('animate__animated animate__fadeInLeft');
            $('#card-2').addClass('animate__animated animate__zoomIn');
            $('#card-three').addClass('animate__animated animate__fadeInRight');
        }
        //skill animation
        else if( (portfolio > 1300) && (portfolio < 1500)) {
            $('#skill-anim').addClass('animate__animated animate__zoomIn')
            $('#skill1-anim').addClass('animate__animated animate__fadeInLeft')
            $('#skill2-anim').addClass('animate__animated animate__fadeInRight')
        } 
        //contact animation
        else if((portfolio > 1850) && (portfolio < 1900)) {
            $('#cont-anim').addClass('animate__animated animate__zoomIn')
            $('#cont2-anim').addClass('animate__animated animate__zoomIn')
            $('#cont3-anim').addClass('animate__animated animate__zoomIn')
        }
        //footer animation 
        else if( (portfolio > 2300) && (portfolio < 2520)) {
            $('#footer-anim').addClass('animate__animated animate__zoomIn')
        }

    })
})
