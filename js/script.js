// $(".topnav").hide();
// $( document ).ready(function() {
// $(".icon").click(function(){
//     $(".topnav").fadeToggle();
// });
// });

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// automatic slideshow 
var imgArray = [
  'img/img-1.jpg',
  'img/img-2.jpg',
  'img/img-3.jpg',
  'img/img-4.jpg',
  'img/img-slide-6.jpg'],
  curIndex = 0;
  imgDuration = 3000;

  function slideShow() {
      document.getElementById('slider').className += "fadeOut";
      setTimeout(function() {
          document.getElementById('slider').src = imgArray[curIndex];
          document.getElementById('slider').className = "";
      },1000);
      curIndex++;
      if (curIndex == imgArray.length) { curIndex = 0; }
      setTimeout(slideShow, imgDuration);
  }
  slideShow();

  var imgArray2 = [
    'img/img-slide-4.jpg',
    'img/img-slide-5.jpg',
    'img/img-slide-7.jpg',
    'img/img-slide.jpg',
    'img/img-slide-3.jpg'],
    curIndex = 0;
    imgDuration = 3000;
  
    function slideShow2() {
        document.getElementById('slider2').className += "fadeOut";
        setTimeout(function() {
            document.getElementById('slider2').src = imgArray2[curIndex];
            document.getElementById('slider2').className = "";
        },1000);
        curIndex++;
        if (curIndex == imgArray.length) { curIndex = 0; }
        setTimeout(slideShow2, imgDuration);
    }
    slideShow2();