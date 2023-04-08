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


    // SIDE NAV JS 

    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }