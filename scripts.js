const intro = document.querySelector('#indroduction');
const video = intro.querySelector('video');
const heroHeadline = intro.querySelector('.hero-headline');

const section = document.querySelector('.canvas-scene-component');
const end = document.querySelector('#noVelocity');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: intro,
  triggerHook: 0

})
.addIndicators()
.setPin(intro)
.addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(heroHeadline, 3, {opacity:1,bottom:0}, {opacity:0, bottom:100});

let scene2 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);


//Intro Animations
let accelamount = 1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos,delay);

  video.currentTime = delay;
}, 60.3);
