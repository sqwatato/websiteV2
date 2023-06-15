$(function(){
    $('#contact-submit').on('click', function(e){
        // remove any previous alerts
        $('.alert').alert('close');
        //Legit don't know what this jquery stuff does
        const contactForm = new FormData();
        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        contactForm.append('name', $("#name").val());
        contactForm.append('email', $("#email").val());
        contactForm.append('subject', $("#subject").val());
        contactForm.append('message', $("#comment").val());
        contactForm.append('csrfmiddlewaretoken', csrftoken);
        // validate the form
        if ($("#name").val() == '' || $("#email").val() == '' || $("#subject").val() == '' || $("#comment").val() == '') {
            $('#contact > div.container.wow.fadeInUp > div > div > div:nth-child(2)').append('<div class="alert alert-danger alert-dismissible fade show" role="alert">Please fill out all fields.<button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button></div>');
            return;
        }
        // validate the email field
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validEmail = validRegex.test($("#email").val());
        if (!validEmail) {
            $('#contact > div.container.wow.fadeInUp > div > div > div:nth-child(2)').append('<div class="alert alert-danger alert-dismissible fade show" role="alert">Please enter a valid email address.<button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button></div>');
            return;
        }
        fetch('', {
            method: 'POST',
            body: contactForm
        })
        .then(response => response.json())
        .then(data => {
            $('#name').val('');
            $('#email').val('');
            $('#subject').val('');
            $('#comment').val('');
            if (data.success) {
                $('#contact > div.container.wow.fadeInUp > div > div > div:nth-child(2)').append('<div class="alert alert-success alert-dismissible fade show" role="alert">Message sent! Will get back to you soon :D<button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button></div>');
            } else {
                $('#contact > div.container.wow.fadeInUp > div > div > div:nth-child(2)').append('<div class="alert alert-danger alert-dismissible fade show" role="alert">There was an error sending your message. T-T Please try again.<button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button></div>');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            $('#name').val('');
            $('#email').val('');
            $('#subject').val('');
            $('#comment').val('');
            $('#contact > div.container.wow.fadeInUp > div > div > div:nth-child(2)').append('<div class="alert alert-danger alert-dismissible fade show" role="alert">There was an error sending your message. T-T Please try again.<button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button></div>');
        });
        
    });
});



// 2. Smooth Scroll spy
		
$('.header-area').sticky({
    topSpacing:0
 });
 
 //=============

 $('li.smooth-menu a, a.navbar-brand').on("click", function(event) {
     event.preventDefault();
     var anchor = $(this);
     $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top - 0
     }, 1200,'easeInOutExpo');
 });
 
 $('body').scrollspy({
     target:'.navbar-collapse',
     offset:0
 });

// 3. Progress-bar

 var dataToggleTooTip = $('[data-toggle="tooltip"]');
 var progressBar = $(".progress-bar");
 if (progressBar.length) {
     progressBar.appear(function () {
         dataToggleTooTip.tooltip({
             trigger: 'manual'
         }).tooltip('show');
         progressBar.each(function () {
             var each_bar_width = $(this).attr('aria-valuenow');
             $(this).width(each_bar_width + '%');
         });
     });
 }

// 4. owl carousel

 // i. client (carousel)
 
     $('#client').owlCarousel({
         items:7,
         loop:true,
         smartSpeed: 1000,
         autoplay:true,
         dots:false,
         autoplayHoverPause:true,
         responsive:{
                 0:{
                     items:2
                 },
                 415:{
                     items:2
                 },
                 600:{
                     items:4

                 },
                 1199:{
                     items:4
                 },
                 1200:{
                     items:7
                 }
             }
         });
         
         
         $('.play').on('click',function(){
             owl.trigger('play.owl.autoplay',[1000])
         })
         $('.stop').on('click',function(){
             owl.trigger('stop.owl.autoplay')
         })


// 5. welcome animation support

 $(window).on("load", function(){
     $(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
     $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
 });

 $(window).on("load",function(){
     $(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
     $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
 });


