(function() {
    const blurProperty = gsap.utils.checkPrefix("filter"),
            blurExp = /blur\((.+)?px\)/,
            getBlurMatch = target => (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];

    gsap.registerPlugin({
        name: "blur",
        get(target) {
            return +(getBlurMatch(target)[1]) || 0;
        },
        init(target, endValue) {
            let data = this,
          filter = gsap.getProperty(target, blurProperty),
          endBlur = "blur(" + endValue + "px)",
          match = getBlurMatch(target)[0],
          index;
      if (filter === "none") {
        filter = "";
      }
      if (match) {
        index = filter.indexOf(match);
        endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
      } else {
        endValue = filter + endBlur;
        filter += filter ? " blur(0px)" : "blur(0px)";
      }
      data.target = target;
      data.interp = gsap.utils.interpolate(filter, endValue);
        },
        render(progress, data) {
            data.target.style[blurProperty] = data.interp(progress);
        }
    });
})();

const intro = document.querySelector('#indroduction');
const video = intro.querySelector('video');
const heroHeadline = intro.querySelector('.hero-headline');
const heroDescription = intro.querySelector('.copy1');

const section = document.querySelector('#indroduction');
const end = document.querySelector('#noVelocity');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration: 2900,
  triggerElement: intro,
  triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

// Video Blur Animation
const blurBackground = TweenMax.fromTo(video, 3, {blur:0, scale:1}, {blur:80,scale:2});

let blurVid = new ScrollMagic.Scene ({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0.5,
  offset: 2800
})
.setTween(blurBackground)
.addTo(controller);





//headline Animation
const headlineAnim = TweenMax.fromTo(heroHeadline, 3, {opacity:1,bottom:0}, {opacity:0, bottom:100});

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
.setTween(headlineAnim)
.addTo(controller);


// Description Animation
const heroCopy = TweenMax.fromTo(heroDescription, 3, {opacity:0,bottom:100}, {opacity:1, bottom:0});

let scene3 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 1,
  offset: 2500
})
.setTween(heroCopy)
.addTo(controller);

// Feature Icons Animation
/* const heroFeatureIcons = TweenMax.fromTo(heroDescription, 3, {opacity:0,bottom:100}, {opacity:1, bottom:0});

let scene4 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 1,
  offset: 2500
})
.setTween(heroFeatureIcons)
.addTo(controller);
*/


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
}, 33.3);
