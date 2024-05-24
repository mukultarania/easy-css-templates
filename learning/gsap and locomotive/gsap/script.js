// First Example
var boxr = document.querySelector("#boxr");

boxr.addEventListener("click", () => {
  gsap.to("#box1", {
    x: 500,
    rotate: 360,
    backgroundColor: "blue",
    duration: 2,
    delay: 1,
  });
});

// Second Example Timeline

var tl = gsap.timeline();

tl.to("#boxt1", {
  x: 500,
  rotate: 360,
  backgroundColor: "blue",
  duration: 2,
});

tl.to("#boxt2", {
  x: 500,
  rotate: 720,
  backgroundColor: "crimson",
  duration: 2,
});
