var tl = gsap.timeline();

tl.from("#nav h3", {
  y: -100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

tl.from("img", {
    x: 500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
})