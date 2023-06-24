// This code animates the height of three elements using the GSAP library, creating a visual effect of one element sliding up while another slides down. 
var t1 = gsap.timeline();

t1
.to("#fs", {
    height: 0,
    duration: 2,
    ease: Expo.easeInOut
})
.to("#fs-text", {
    height: 0,
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut
})
.to("#elem", {
    height: "100%",
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut
})
.to("#white", {
    height: "100%",
    duration: 2,
    delay: -1.6,
    ease: Expo.easeInOut
})