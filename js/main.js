
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow-image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds (Idea from Conner)  
  }

  // function equalize(name){
  //   var heights = $(name).map(function() {
  //       return $(this).height();
  //   }).get(),
  
  //   maxHeight = Math.max.apply(null, heights);
  //   $(name).height(maxHeight);
  // }
  
  // function removeHeights(name){
  //   $(name).height("auto");
  // }
  
  function hamburgerMenu() {
      var x = document.getElementById("nav-items");
      if (x.className === "nav-items") {
          x.className += " responsive";
      }
      else {
          x.className = "nav-items";
      }
  }
  
  