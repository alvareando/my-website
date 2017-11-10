// Banner Typed.js
 var options = {
      strings: ["Hi, I am Álvaro", "I am an Ambitious Programmer", "I am an Ingenious Marketer", "I am a Start-up Builder", "Welcome to my world"],
      loop: false,
      typeSpeed: 40,
      shuffle: false,
      autoInsertCss: true,
    }

    var typed = new Typed("#typed", options);


// Determine if element is in Viewport!
function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();

    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}


// Add class when element is in view
function addClassToElement(element, className) {
  for (var i = 0; i < element.length; i++) {
    if (isAnyPartOfElementInViewport(element[i])) {
      element[i].classList.add(className);
    }
  }
}


// Event Listener to elements
function addClassEventListener(element, className) {
  window.addEventListener('scroll', function() {
      addClassToElement(element, className);
    });
  window.addEventListener('load', function() {
      addClassToElement(element, className);
    });
}


// Trigger progressBar when shape elements in-view
function progressBar(selector, shapeVariable, fill) {
  for (var i = 0; i < selector.length; i++) {
    if (isAnyPartOfElementInViewport(selector[i])) {
      shapeVariable.animate(fill);
    }
  }
};


// Event Listener to Shape Elements
function progressBarEventListeners(event, selector, shapeVariable, fill) {
  window.addEventListener(event, function() {
    progressBar(selector, shapeVariable, fill);
  });
  window.removeEventListener(event, function() {
    progressBar(selector, shapeVariable, fill);
  })
};


// Define and select class elements
var timeline = document.querySelectorAll(".timeline li");
var titles = document.querySelectorAll(".row--left h1")


//Define and Select shape elements
var rubyOnRails = document.querySelectorAll(".card--skill h3");
var htmlCSS = document.querySelectorAll(".htmlCSS")


addClassEventListener(titles, "tracking-in-expand")
addClassEventListener(timeline, "in-view")

progressBarEventListeners("scroll", rubyOnRails, rorCircle, 0.5)
progressBarEventListeners(htmlCSS, htmlCircle, 0.5)



