function pageTransition1() {
  let tl = gsap.timeline();

  tl.to(".main-loader", {
    duration: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    ease: "power4.inOut",
  });

  tl.to(".nav-header", {
    duration: 1,
    translateY: "-100%",
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0,
  });

  tl.to(".main-loader", {
    duration: 1,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0.2,
  });

}

function pageTransition() {
  let tl = gsap.timeline();


  tl.to(".main-loader", {
    duration: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    ease: "power4.inOut",
  });

  tl.to(".nav-header", {
    duration: 1,
    translateY: "-100%",
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0,
  });

  tl.to(".main-loader", {
    duration: 1,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 1,
  });
}

function contentAnimation() {
  let tl = gsap.timeline();
  tl.to(".main-loader", {
    top: 0,
    duration: 1,
    ease: "power3.inOut",
    delay: 0.75,
  });
}

function delay(n) {
  n = n || 0;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

// Reset scroll on page next
barba.hooks.leave(function() {
  history.scrollRestoration = "manual";
});

var scrollPosY = 0

barba.hooks.enter((data) => {
  if(data.trigger !== "back") {
    scrollPosY = barba.history.current.scroll.y;
  }
});

barba.init({
  sync: true,
  timeout:7000,
  transitions: [
    {
      name: "default-transition",
      async once(data) {
        await delay(1000);
        contentAnimation();
      },
      async enter(data) {
        pageTransition();
        await delay(1000);
        contentAnimation();
      },
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      },
    },
  ],
});


let btnToggleMenu = $('.btn-toggle-menu');
let navHeader = $('.nav-header');

btnToggleMenu.click(()=>{
  navHeader.css("translate", "0 0");
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