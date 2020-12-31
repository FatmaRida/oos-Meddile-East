
 new WOW().init();

 // start red message
   function showpanel(){
                
                document.getElementById('panel').style.display="block";
                
            }
            
            function hidepanel(){
                   document.getElementById('panel').style.display="none";
                
            }

   // end red message


  // start social media

      function showSocialMedia(){
                
                document.getElementById('social-media').style.display="block";
                
            }
            
            function hideSocialMedia(){
                   document.getElementById('social-media').style.display="none";
                
            }
            


// start section7
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});