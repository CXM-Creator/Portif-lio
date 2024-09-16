src = "https://kit.fontawesome.com/e694edb98e.js";
crossorigin = "anonymous";

function eventClick() {
  doc = document.getElementById("bot");
  doc.style.backgroundColor = "black";
  doc.style.color = "white";
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function myPage() {}
