
function pageTransition1() {
  let tl = gsap.timeline();

  tl.to(".loading-page", {
    duration: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    ease: "power4.inOut"
  });

  tl.to(".loading-page", {
    duration: 1,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0.2
  });
}

function pageTransition() {
  let tl = gsap.timeline();

  tl.to(".loading-page", {
    duration: 1,
    translateY: "0", 
    transformOrigin: "bottom",
    ease: "power4.inOut"
  });

  tl.to(".loading-page", {
    duration: 1,
    translateY: "100%", // ramène l'élément à sa position d'origine
    ease: "power4.inOut",
    delay: 1
  });
}

function contentAnimation() {
  let tl = gsap.timeline();
  tl.to(".loading-page", {
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

barba.init({
    sync: true,
    transitions: [{
        name: "default-transition",
        async leave(data) {
          const done = this.async();
          pageTransition();
          await delay(1000);
          done();
        },
        async enter(data) {
          pageTransition();
          await delay(1000);
          contentAnimation();
        },
        async once(data) {
          await delay(1000);
          contentAnimation();
        }
    }],
    views: [{
        namespace: 'home',
        async beforeEnter() {
          // Attendre que le loader soit caché avant de déclencher les animations
          // await delay(1000);
          // Appliquer un flou à l'élément data-barba="container"
        //   gsap.to('[data-barba="container"]', { filter: 'blur(3px)', duration: 1 });
        },
        async afterEnter() {
          // Retirer le flou après l'entrée dans la page de contact
        //   gsap.to('[data-barba="container"]', { filter: 'blur(0px)', duration: 1 });
          // Ajouter d'autres animations spécifiques à la page de contact après l'entrée
        //   gsap.from(".contact-title", { opacity: 0, y: "100%", duration: 1 });
        //   gsap.from(".contact-description", { opacity: 0, y: "100%", duration: 1, delay: 0.4 });
        },
    }],
});
