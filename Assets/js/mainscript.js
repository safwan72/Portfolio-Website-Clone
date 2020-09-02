document.getElementById('navtoggler').addEventListener('click', toggler)

function toggler() {
    document.querySelector('.mobilenavbar').classList.toggle('show');
}
document.getElementById('navcloser').addEventListener('click', toggler);

document.querySelector('form').addEventListener('submit',e=>e.preventDefault());



// portfolio buttons
const buttonsall=document.querySelectorAll('.buttonsportfolio button');
let allgrids=document.querySelectorAll('.portfoilomainpics');
const allbtn=document.querySelector('.allbtn');
allbtn.classList.add('activeport')
const popularbtn=document.querySelector('.popularbtn');
const latestbtn=document.querySelector('.latestbtn');
const topbtn=document.querySelector('.topbtn');
const upcomingbtn=document.querySelector('.upcomingbtn');
const unreleasedbtn=document.querySelector('.unreleasedbtn');

popularbtn.addEventListener('click',displaygrids);
latestbtn.addEventListener('click',displaygrids);
topbtn.addEventListener('click',displaygrids);
upcomingbtn.addEventListener('click',displaygrids);
unreleasedbtn.addEventListener('click',displaygrids);
allbtn.addEventListener('click',(e)=>{
  allgrids.forEach((e)=>{
      e.style.display = "grid"; 
      
    });
    tabs(e);
});

function displaygrids(param) {
  tabs(param.currentTarget);
let buttonhtml=param.currentTarget.innerHTML;
allgrids.forEach((e)=>{
  let ess=e.innerHTML;
  if(e.children[2].innerHTML.includes(buttonhtml)){
    e.style.display = "grid";
  }
  else{
    e.style.display = "none";
  }

});
}
function tabs(ed) {
  buttonsall.forEach((e) => {
    e.classList.remove("activeport");
  });
  ed.classList.add("activeport");
}






// smooth scroll
$(function(){
  $("a").creep({
    speed:400,
    offset:-100
  });
});



// animate pics
$(window).on('resize scroll', function() {
  $('.rigimg').each(function() {
    if($(this).inViewport('-5')) {  
      $(this).addClass('addpic');
    } else {
      $(this).removeClass('addpic');
    }
  });
});

// cursor javascript
new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    scrollLock: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 460,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
      
    ]
  });