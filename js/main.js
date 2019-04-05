$(document).ready(function() {
    //Initiate equalize on load
    equalize(".sameHeight");
    equalize(".sameHeightCar");
  
    arrows();
  });
  
  //Equalize on resizing of window
  $(window).resize(function() {
    removeHeights(".sameHeight");
    removeHeights(".sameHeightCar");
    equalize(".sameHeight");
    equalize(".sameHeightCar");
  });
  
  function equalize(name){
    var heights = $(name).map(function() {
        return $(this).height();
    }).get(),
  
    maxHeight = Math.max.apply(null, heights);
    $(name).height(maxHeight);
  }
  
  function removeHeights(name){
    $(name).height("auto");
  }
  
  function hamburgerMenu() {
      var x = document.getElementById("nav-items");
      if (x.className === "nav-items") {
          x.className += " responsive";
      }
      else {
          x.className = "nav-items";
      }
  }
  
  // Function to switch between years cars and teamleads
  //TODO: Implement a cleaner position system with transition
  function showOnlySlide(pos) {
    var years = ["2019", "2018", "2017"],
        yearElementArray = [],
        target = Math.abs(pos);
    for (var year=0; year<years.length; year++) {
      yearElementArray[year] = document.getElementsByClassName(years[year]);
      for (var i=0; i<yearElementArray[year].length; i++) {
        if (year === target) {
          yearElementArray[year][i].style.display='block';
        }
        else {
          yearElementArray[year][i].style.display='none';
        }
      }
    }
  }
  
  function moveSlide(dir, pos, max) {
    if (dir === "prev" && pos !==max) {
      pos--;
    }
    else if (dir === "next" && pos !==0) {
      pos++;
    }
    if (pos === 0) {
      document.getElementById("control-prev").style.display = "block";
      document.getElementById("control-next").style.display = "none";
    }
    else if (pos === max) {
      document.getElementById("control-prev").style.display = "none";
      document.getElementById("control-next").style.display = "block";
    }
    else if (pos !== 0) {
      document.getElementById("control-next").style.display = "block";
      document.getElementById("control-prev").style.display = "block";
    }
    showOnlySlide(pos);
    return pos
  }
  
  function arrows() {
    var arrows = document.getElementById("arrows"),
        move = document.getElementById("slide"),
        pos = 0,
        max = -2;
  
    document.getElementById("control-next").style.display = "none";
  
    // Add only one event listener and let clicks bubble up
    arrows.addEventListener("click", function (e) {
        pos = moveSlide(e.target.dataset["slide"], pos, max);
        // Don't change pages
        e.preventDefault();
    });
  }
  