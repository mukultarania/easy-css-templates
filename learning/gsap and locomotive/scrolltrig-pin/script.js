gsap.to("#page2 img", {
    width: "100%",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0",
        end: "top -100%",
        markers: true,
        pin: true,
        scrub: 2,
    } 
});  

gsap.to("#page3 h1", {
    transform: "translateX(-100%)",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 0",
        end: "top -100%",
        markers: true,
        pin: true,
        scrub: 5,
    }
})