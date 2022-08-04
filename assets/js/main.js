/* Start Scroll to top button && Skills */
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".skills");

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY >= section.offsetTop - 420) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* End Scroll to top button && Skills */

/* Start Nav Bullets */
var scrollTop = 0;
var index = 0;
const windowHeight = window.innerHeight;
const sections = document.querySelectorAll("section");
const navBullets = document.querySelector(".navBullets");
function resetSelection() {
  for (var i = 0; i < navBullets.children.length; i++) {
    navBullets.children[i].classList.remove("selected");
  }
}
window.addEventListener("scroll", function () {
  scrollTop = window.scrollY;
  sections.forEach(function (section, i) {
    if (
      section.offsetTop < scrollTop + windowHeight / 2 &&
      scrollTop < section.offsetTop + windowHeight / 2
    ) {
      resetSelection();
      navBullets.children[i].classList.add("selected");
    }
  });
});

navBullets.querySelectorAll("li").forEach(function (item, i) {
  item.addEventListener("click", function () {
    resetSelection();
    window.scrollTo({
      top: i * 1.29 * windowHeight,
      behavior: "smooth",
    });
  });
});
/* End Nav Bullets */

/* Start Animation Component */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
/* End Animation Component */
