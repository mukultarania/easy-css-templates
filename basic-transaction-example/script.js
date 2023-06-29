document.querySelectorAll(".reveal").forEach((elem) => {
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);

    elem.innerHTML = "";
    elem.appendChild(spanParent);
  });

  var t1 = gsap.timeline();

  t1
  .from(".child span", {
    x: "100",
    stagger: .2,
    duration: 1.4,
    ease: Power3.easeInOut
  })
  .to(".parent .child", {
    y : "-100%",
    duration : 1,
    ease: Circ.easeInOut
  })
  .to("#loader", {
    height: "0%",
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to("#green", {
    height: "100%",
    top: 0,
    duration: 1,
    delay: -1,
    ease: Circ.easeInOut,
  })
  .to("#green", {
    height: "0%",
    duration: 1,
    delay: -.5,
    ease: Circ.easeInOut,
  })