// up buuton
let span = document.querySelector(".up");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 300) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
  // this.scrollY >= 100? span.classList.add("show"): span.classList.remove("show");
};

function upToup() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// nav animmation
let nav = document.getElementById("navbar");

window.onscroll = function () {
  updateProgressBar();
  if (this.scrollY >= 300) {
    nav.style.backgroundColor = "#292025a1";
    nav.style.borderRadius = "0 0 12px 12px";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};

// window.onscroll = function () {};

function updateProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}
