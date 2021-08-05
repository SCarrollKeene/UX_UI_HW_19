$(document).ready(function(){
    // smooth scrolling to all links
    // good alternative for browsers that don't support the css smooth scroll effect
    $("a").click(function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){
     
          window.location.hash = hash;
        });
      }
    });
  });