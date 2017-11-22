


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







// Define and select class elements
var timeline = document.querySelectorAll(".timeline li");
var titles = document.querySelectorAll(".row--left h1")




addClassEventListener(titles, "tracking-in-expand")
addClassEventListener(timeline, "in-view")



