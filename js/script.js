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

    // darkmode 
    const toggleSwitch = document.querySelector('input[type="checkbox"]');
    const nav = document.getElementById('nav');
    const toggleIcon = document.getElementById('toggle-icon');
    const menuBtn = document.getElementById('menu-btn');
    const arrow = document.getElementById('arrow');
    const arrow2 = document.getElementById('arrow2');
    const disMenu1 = document.getElementById('dis-menu1');
    const disMenu2 = document.getElementById('dis-menu2');
    const disMenu3= document.getElementById('dis-menu3');
    const disMenu4 = document.getElementById('dis-menu4');
    // const disMenu = document.getElementsByClassName('dis-menu');

   // Dark mode
    function darkMode() {
      nav.style.backgroundColor = 'black';
      menuBtn.style.color = 'white';
      arrow.style.color = 'white';
      arrow2.style.color = 'white';
      disMenu1.style.color = 'white';
      disMenu2.style.color = 'white';
      disMenu3.style.color = 'white';
      disMenu4.style.color = 'white';
      toggleIcon.children[0].classList.remove('fa-sun');
      toggleIcon.children[0].classList.add('fa-moon');
    }

     // light mode
     function lightMode() {
      nav.style.backgroundColor = 'white';
      menuBtn.style.color = 'black';
      arrow.style.color = 'black';
      arrow2.style.color = 'black';
      disMenu1.style.color = 'black';
      disMenu2.style.color = 'black';
      disMenu3.style.color = 'black';
      disMenu4.style.color = 'black';
      toggleIcon.children[0].classList.remove('fa-moon');
      toggleIcon.children[0].classList.add('fa-sun'); 
    }

    // switch theme dynamically
    function switchTheme(event){
      if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
      }
    }

    //Event Listener
    toggleSwitch.addEventListener('change', switchTheme);