function pageTransition1() {
  let tl = gsap.timeline();

  tl.to(".main-loader", {
    duration: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    ease: "power4.inOut",
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