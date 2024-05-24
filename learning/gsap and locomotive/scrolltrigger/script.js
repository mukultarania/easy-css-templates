gsap.from("#page1 #circle", {
  duration: 2,
  rotate: 740,
  scale: 0,
});

gsap.from("#page2 #circle", {
    duration: 2,
    rotate: 360,
    scale: 0,
    scrollTrigger: {
        trigger: "#page2 #circle",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top center",
        scrub: 2,
    }
  });
