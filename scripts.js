document.addEventListener("DOMContentLoaded", function(event) {
  window.onload = function() {
    window.requestAnimationFrame(function() {
const intro = document.querySelector('#indroduction');
const video = intro.querySelector('#heroIntroAnimation');
const heroHeadline = intro.querySelector('.hero-headline');
const heroDescription = intro.querySelector('.copy1');
const features = intro.querySelector('.copy2');
const section = document.querySelector('#indroduction');


const headingAnimation = document.querySelector('.heading-animation-frame');
const headingAnimationContainer = document.querySelector('.heading-image-sequence-component');
const headingGizmaAnimation = document.querySelector('#headingGizmoAnimation');
const velocitySection = document.querySelector('#noVelocity');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

// Smooth Start
let run = gsap.timeline();
run.fromTo(video, 1, {opacity:0,scale:0.5,ease:Power4.easeOut}, {opacity:1, scale:1})
.fromTo(heroHeadline, 1, {opacity:0,bottom:100}, {opacity:1, bottom:0});

// Intro Image Sequence //
let heroImages = [
    "images/hero-animation0001.png",
    "images/hero-animation0002.png",
    "images/hero-animation0003.png",
    "images/hero-animation0004.png",
    "images/hero-animation0005.png",
    "images/hero-animation0006.png",
    "images/hero-animation0007.png",
    "images/hero-animation0008.png",
    "images/hero-animation0009.png",
    "images/hero-animation0010.png",
    "images/hero-animation0011.png",
    "images/hero-animation0012.png",
    "images/hero-animation0013.png",
    "images/hero-animation0014.png",
    "images/hero-animation0015.png",
    "images/hero-animation0016.png",
    "images/hero-animation0017.png",
    "images/hero-animation0018.png",
    "images/hero-animation0019.png",
    "images/hero-animation0020.png",
    "images/hero-animation0021.png",
    "images/hero-animation0022.png",
    "images/hero-animation0023.png",
    "images/hero-animation0024.png",
    "images/hero-animation0025.png",
    "images/hero-animation0026.png",
    "images/hero-animation0027.png",
    "images/hero-animation0028.png",
    "images/hero-animation0029.png",
    "images/hero-animation0030.png",
    "images/hero-animation0031.png",
    "images/hero-animation0032.png",
    "images/hero-animation0033.png",
    "images/hero-animation0034.png",
    "images/hero-animation0035.png",
    "images/hero-animation0036.png",
    "images/hero-animation0037.png",
    "images/hero-animation0038.png",
    "images/hero-animation0039.png",
    "images/hero-animation0040.png",
    "images/hero-animation0041.png",
    "images/hero-animation0042.png",
    "images/hero-animation0043.png",
    "images/hero-animation0044.png",
    "images/hero-animation0045.png",
    "images/hero-animation0046.png",
    "images/hero-animation0047.png",
    "images/hero-animation0048.png",
    "images/hero-animation0049.png",
    "images/hero-animation0050.png",
    "images/hero-animation0051.png",
    "images/hero-animation0052.png",
    "images/hero-animation0053.png",
    "images/hero-animation0054.png",
    "images/hero-animation0055.png",
    "images/hero-animation0056.png",
    "images/hero-animation0057.png",
    "images/hero-animation0058.png",
    "images/hero-animation0059.png",
    "images/hero-animation0060.png",
    "images/hero-animation0061.png",
    "images/hero-animation0062.png",
    "images/hero-animation0063.png",
    "images/hero-animation0064.png",
    "images/hero-animation0065.png",
    "images/hero-animation0066.png",
    "images/hero-animation0067.png",
    "images/hero-animation0068.png",
    "images/hero-animation0069.png",
    "images/hero-animation0070.png",
    "images/hero-animation0071.png",
    "images/hero-animation0072.png",
    "images/hero-animation0073.png",
    "images/hero-animation0074.png",
    "images/hero-animation0075.png",
    "images/hero-animation0076.png",
    "images/hero-animation0077.png",
    "images/hero-animation0078.png",
    "images/hero-animation0079.png",
    "images/hero-animation0080.png",
    "images/hero-animation0081.png",
    "images/hero-animation0082.png",
    "images/hero-animation0083.png",
    "images/hero-animation0084.png",
    "images/hero-animation0085.png",
    "images/hero-animation0086.png",
    "images/hero-animation0087.png",
    "images/hero-animation0088.png",
    "images/hero-animation0089.png",
    "images/hero-animation0090.png",
    "images/hero-animation0091.png",
    "images/hero-animation0092.png",
    "images/hero-animation0093.png",
    "images/hero-animation0094.png",
    "images/hero-animation0095.png",
    "images/hero-animation0096.png",
    "images/hero-animation0097.png",
    "images/hero-animation0098.png",
    "images/hero-animation0099.png",
    "images/hero-animation0100.png",
	];
let obj = {curImg: 0};

let tween = TweenMax.to(obj, 0.5,
		{
			curImg: heroImages.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#heroIntroAnimation").attr("src", heroImages[obj.curImg]); // set the image source
			}
		}
	);

let scene = new ScrollMagic.Scene({
  duration: 1400,
  triggerElement: intro,
  triggerHook: 0
})
.addIndicators({name: "Hero Sequence"})
.setTween(tween)
.setPin(intro)
.addTo(controller);


let introLine = gsap.timeline();

introLine.fromTo(heroDescription, 5, {opacity:0}, {opacity:1})
.to(heroDescription, 5, {opacity:0}, 15 )
.to(video, 5, {opacity:0.3})
.fromTo(features, 5, {opacity:0}, {opacity:1});

//headline Animation
const headlineAnim = TweenMax.to(heroHeadline, 3, {opacity:0,bottom:100});

let scene2 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0
})
.addIndicators({name: "Title Animation"})
.setTween(headlineAnim)
.addTo(controller);

let scene3 = new ScrollMagic.Scene({
  duration: 1200,
  triggerElement: intro,
  triggerHook: 0,
  offset: 300
})
.addIndicators({name: "Hero Copy"})
.setTween(introLine)
.addTo(controller);


// Heading Image Sequence
let headingImages = [
    "images/Heading0001.png",
    "images/Heading0002.png",
    "images/Heading0003.png",
    "images/Heading0004.png",
    "images/Heading0005.png",
    "images/Heading0006.png",
    "images/Heading0007.png",
    "images/Heading0008.png",
    "images/Heading0009.png",
    "images/Heading0010.png",
    "images/Heading0011.png",
    "images/Heading0012.png",
    "images/Heading0013.png",
    "images/Heading0014.png",
    "images/Heading0015.png",
    "images/Heading0016.png",
    "images/Heading0017.png",
    "images/Heading0018.png",
    "images/Heading0019.png",
    "images/Heading0020.png",
    "images/Heading0021.png",
    "images/Heading0022.png",
    "images/Heading0023.png",
    "images/Heading0024.png",
    "images/Heading0025.png",
    "images/Heading0026.png",
    "images/Heading0027.png",
    "images/Heading0028.png",
    "images/Heading0029.png",
    "images/Heading0030.png",
    "images/Heading0031.png",
    "images/Heading0032.png",
    "images/Heading0033.png",
    "images/Heading0034.png",
    "images/Heading0035.png",
    "images/Heading0036.png",
    "images/Heading0037.png",
    "images/Heading0038.png",
    "images/Heading0039.png",
    "images/Heading0040.png",
    "images/Heading0041.png",
    "images/Heading0042.png",
    "images/Heading0043.png",
    "images/Heading0044.png",
    "images/Heading0045.png",
    "images/Heading0046.png",
    "images/Heading0047.png",
    "images/Heading0048.png",
    "images/Heading0049.png",
    "images/Heading0050.png",
	];

  // Heading Image Sequence
  let headingGizmoImages = [
      "images/heading-gizmo_00000.png",
      "images/heading-gizmo_00001.png",
      "images/heading-gizmo_00002.png",
      "images/heading-gizmo_00003.png",
      "images/heading-gizmo_00004.png",
      "images/heading-gizmo_00005.png",
      "images/heading-gizmo_00006.png",
      "images/heading-gizmo_00007.png",
      "images/heading-gizmo_00008.png",
      "images/heading-gizmo_00009.png",
      "images/heading-gizmo_00010.png",
      "images/heading-gizmo_00011.png",
      "images/heading-gizmo_00012.png",
      "images/heading-gizmo_00013.png",
      "images/heading-gizmo_00014.png",
      "images/heading-gizmo_00015.png",
      "images/heading-gizmo_00016.png",
      "images/heading-gizmo_00017.png",
      "images/heading-gizmo_00018.png",
      "images/heading-gizmo_00019.png",
      "images/heading-gizmo_00020.png",
      "images/heading-gizmo_00021.png",
      "images/heading-gizmo_00022.png",
      "images/heading-gizmo_00023.png",
      "images/heading-gizmo_00024.png",
      "images/heading-gizmo_00025.png",
      "images/heading-gizmo_00026.png",
      "images/heading-gizmo_00027.png",
      "images/heading-gizmo_00029.png",
      "images/heading-gizmo_00030.png",
      "images/heading-gizmo_00031.png",
      "images/heading-gizmo_00032.png",
      "images/heading-gizmo_00033.png",
      "images/heading-gizmo_00034.png",
      "images/heading-gizmo_00035.png",
      "images/heading-gizmo_00036.png",
      "images/heading-gizmo_00037.png",
      "images/heading-gizmo_00038.png",
      "images/heading-gizmo_00039.png",
      "images/heading-gizmo_00040.png",
      "images/heading-gizmo_00041.png",
      "images/heading-gizmo_00042.png",
      "images/heading-gizmo_00043.png",
      "images/heading-gizmo_00044.png",
      "images/heading-gizmo_00045.png",
      "images/heading-gizmo_00046.png",
      "images/heading-gizmo_00047.png",
      "images/heading-gizmo_00048.png",
  	];

  let headingObj = {curImg: 0};
  let headingGizObj = {curImg: 0};

  let headingAnima = TweenMax.to(headingObj, 0.5,
  		{
  			curImg: headingImages.length - 1,	// animate propery curImg to number of images
  			roundProps: "curImg",				// only integers so it can be used as an array index
  			repeat: 0,									// repeat 3 times
  			immediateRender: true,			// load first image automatically
  			ease: Linear.easeNone,			// show every image the same ammount of time
  			onUpdate: function () {
  			  $("#headingAnimation").attr("src", headingImages[headingObj.curImg]); // set the image source
  			}
  		}
  	);

    let headingGizmo = TweenMax.to(headingGizObj, 0.5,
    		{
    			curImg: headingGizmoImages.length - 1,	// animate propery curImg to number of images
    			roundProps: "curImg",				// only integers so it can be used as an array index
    			repeat: 0,									// repeat 3 times
    			immediateRender: true,			// load first image automatically
    			ease: Linear.easeNone,			// show every image the same ammount of time
    			onUpdate: function () {
    			  $("#headingGizmoAnimation").attr("src", headingGizmoImages[headingGizObj.curImg]); // set the image source
    			}
    		}
    	);

      let headingAnimationIntro = gsap.timeline();
      headingAnimationIntro.to(headingAnimation, 5, {width:"100vw"});

      let scene6 = new ScrollMagic.Scene({
        duration: 500,
        triggerElement: velocitySection,
        triggerHook: 0.3
      })
      .addIndicators({name: "Scale Animation Viewport"})
      .setTween(headingAnimationIntro)
      .addTo(controller);

      let scene7 = new ScrollMagic.Scene({
        duration: 500,
        triggerElement: headingAnimation,
        triggerHook: 0
      })
      .addIndicators({name: "Set Pin"})
      .setPin(headingAnimationContainer)
      .addTo(controller);

    let scene4 = new ScrollMagic.Scene({
      duration: 1000,
      triggerElement: headingAnimation,
      triggerHook: 0.5
    })
    .addIndicators({name: "Start Heading Animation"})
    .setTween(headingAnima)
    .addTo(controller);

    let scene5 = new ScrollMagic.Scene({
      duration: 1000,
      triggerElement: headingAnimation,
      triggerHook: 0.5
    })
    .addIndicators({parent: headingAnima, name: "Start Gizmo Animation"})
    .setTween(headingGizmo)
    .addTo(controller);

  });
};
});
