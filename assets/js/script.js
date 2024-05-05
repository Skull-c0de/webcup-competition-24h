let btnToggleMenu = $('.btn-toggle-menu');
let btnCloseMenu = $('.btn-close-menu');
let navHeader = $('.nav-header');
let logoLoader = $('.loader svg');

btnToggleMenu.click(()=>{
  navHeader.css("translate", "0 0");
});

btnCloseMenu.click(()=>{
  navHeader.css("translate", "0 -100%");
});

let lastScrollTop = 0;
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);
  if (scrollTop > lastScrollTop){
    header.style.top = "calc(0rem - var(--header-height)) ";

  } else {
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
