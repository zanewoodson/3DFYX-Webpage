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
const video = intro.querySelector('#heroIntroAnimation');
const heroHeadline = intro.querySelector('.hero-headline');
const heroDescription = intro.querySelector('.copy1');
const features = intro.querySelector('.copy2');

const section = document.querySelector('#indroduction');
const end = document.querySelector('#noVelocity');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

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
  duration: 3090,
  triggerElement: intro,
  triggerHook: 0
})
.addIndicators()
.setTween(tween)
.setPin(intro)
.addTo(controller);


let introLine = gsap.timeline();

introLine.fromTo(heroDescription, 5, {opacity:0}, {opacity:1})
.to(heroDescription, 5, {opacity:0}, 20 )
.fromTo(features, 5, {opacity:0}, {opacity:1});

//headline Animation
const headlineAnim = TweenMax.fromTo(heroHeadline, 3, {opacity:1,bottom:0}, {opacity:0, bottom:100});

let scene2 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0
})
.setTween(headlineAnim)
.addTo(controller);

let scene3 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 500
})
.setTween(introLine)
.addTo(controller);
