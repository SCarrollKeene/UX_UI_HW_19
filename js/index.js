$(document).ready(()=> {
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

   // store btnTop into variable:
   let buttonTop = document.getElementById("btnTop");

   // shoe btn When user scrolls down 20px from top of the document
   window.onscroll = function() {stickyNav(), scroll()};
 
   function scroll() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       buttonTop.style.display = "block";
     } else {
       buttonTop.style.display = "none";
     }
   }
 
   // on user click scroll to the top of the document
   function scrollToTop() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }

  let navbar = document.getElementById("navigation");
  let sticky = navbar.offsetTop;

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }