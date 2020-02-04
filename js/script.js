
$(document).ready(function() {

// For the sticky navigation - waypoint ==============================================================================================================
     $('.js--section-features').waypoint(function(direction) {
          if (direction == "down") {
               $('nav').addClass('sticky');
          } else {
               $('nav').removeClass('sticky');
          }
     }, {
          offset: '100px'
     });

// Scroll on main cta buttons ==============================================================================================================
/*     $('.js--scroll-to-plans').click(function() {
          $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
     });

     $('.js--scroll-to-start').click(function() {
          $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
     });
*/

// Navigation scroll ============================================================================================================== got this from css-tricks

     // URL updates and the element focus is maintained
     // originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

     // filter handling for a /dir/ OR /indexordefault.page
         function filterPath(string) {
          return string
          .replace(/^\//, '')
          .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
          .replace(/\/$/, '');
     }
     
     var locationPath = filterPath(location.pathname);
     $('a[href*="#"]').each(function () {
          var thisPath = filterPath(this.pathname) || locationPath;
          var hash = this.hash;
          if ($("#" + hash.replace(/#/, '')).length) {
          if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
          var $target = $(hash), target = this.hash;
          if (target) {
               $(this).click(function (event) {
               event.preventDefault();
               $('html, body').animate({scrollTop: $target.offset().top}, 1000, function () {
                    location.hash = target; 
                    $target.focus();
                    if ($target.is(":focus")){ //checking if the target was focused
                    return false;
                    }else{
                    $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
                    $target.focus(); //Setting focus
                    };
               });       
               });
          }
          }
          }
     });
/*
     //this script doesn't update the URL this is also from css-tricks
     // Select all links with hashes
     $('a[href*="#"]')
     // Remove links that don't actually link to anything
     .not('[href="#"]')
     .not('[href="#0"]')
     .click(function(event) {
     // On-page links
     if (
     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
     && 
     location.hostname == this.hostname
     ) {
     // Figure out element to scroll to
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     // Does a scroll target exist?
     if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
          scrollTop: target.offset().top
          }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
               return false;
          } else {
               $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
               $target.focus(); // Set focus again
          };
          });
     }
     }
     });
*/
});   

// var waypoints = $('#handler-first').waypoint(function(direction) {
//      notify(this.element.id + ' hit 25% from top of window') 
//    }, {
//      offset: '25%'
//    })


// nav bar highligt on scroll=========================================================================================================codepen.io - https://codepen.io/ivanmt07/pen/pxONrw
function onScroll(event){
     var sections = document.querySelectorAll('#menu-center a');
     var scrollPos = window.pageYOffset + 100 || document.documentElement.scrollTop || document.body.scrollTop; //I addded this '+ 100' by searching a lot I inspired by this "https://www.w3schools.com/jsref/prop_element_scrolltop.asp" - this is to highlight the nav element before 100px.
     
     for( var i = 0; i < sections.length; i++) {
       var currLink = sections[i]; 
       var val = currLink.getAttribute('href');
       var refElement = document.querySelector(val);
         if( refElement.offsetTop <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight > scrollPos)){
          //  document.querySelector('#menu-center ul li a').classList.remove('active');   
           document.querySelector('#menu-center div div a').classList.remove('active'); // roshan - above was the original, I formatted as needed adding div s insted of ul and li.
           currLink.classList.add('active');
         }else{
            currLink.classList.remove('active');
          }
     }                                                           
       
   };
   
   window.document.addEventListener('scroll', onScroll );
   
   
   // function onScroll(event){
   //   var sections = document.querySelectorAll('#menu-center a');
   //   var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
   //   sections.forEach(function(currLink){
   //    var val = currLink.getAttribute('href');
   //    var refElement = document.querySelector(val);
   //     if( refElement.offsetTop <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight > scrollPos)){
   //       document.querySelector('#menu-center ul li a').classList.remove('active');
   //        currLink.classList.add('active');
   //        }else{
   //          currLink.classList.remove('active');
   //        }
   //   });
                                                              
       
   // };
   
   // window.document.addEventListener('scroll', onScroll );


//Material Design Buttons ripple effect==============================================================================================================
   (function (window, $) {
  
     $(function() {
       
       
       $('.ripple').on('click', function (event) {
         event.preventDefault();
         
         var $div = $('<div/>'),
             btnOffset = $(this).offset(),
                   xPos = event.pageX - btnOffset.left,
                   yPos = event.pageY - btnOffset.top;
         
   
         
         $div.addClass('ripple-effect');
         var $ripple = $(".ripple-effect");
         
         $ripple.css("height", $(this).height());
         $ripple.css("width", $(this).height());
         $div
           .css({
             top: yPos - ($ripple.height()/2),
             left: xPos - ($ripple.width()/2),
             background: $(this).data("ripple-color")
           }) 
           .appendTo($(this));
   
         window.setTimeout(function(){
           $div.remove();
         }, 2000);
       });
       
     });
     
   })(window, jQuery);
   //Material Design Buttons ripple effect==============================================================================================================