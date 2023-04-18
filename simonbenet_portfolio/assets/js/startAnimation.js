window.addEventListener("load", loader)

function loader() {

    const timeline = gsap.timeline()

    timeline
    .to("#logo", {y: 0, ease: "power1.easeOut"})
    .to("#enMode", {y: 0, ease: "power1.easeOut"}, "-=0.4")
    .to("#frMode", {y: 0, ease: "power1.easeOut"}, "-=0.4")
    .to("#lightMode", {y: 0, ease: "power1.easeOut"}, "-=0.4")
    .to("#darkMode", {y: 0, ease: "power1.easeOut"}, "-=0.4")
    .to(".navLink", {opacity: 1, duration: 2, ease: "power1.easeOut"})
    .to("#leftSideNav", {x: 0, ease: "power1.easeOut"}, "-=2")
    .to("#rightSideNav", {x: 0, ease: "power1.easeOut"}, "-=2")
    .to("#homeHeaderP", {x: 0, ease: "power1.easeOut"}, "-=1")
    .to("#mainH1", {x: 0, ease: "power1.easeOut"}, "-=1")
    .to("#homePContainer", {x: 0, ease: "power1.easeOut"}, "-=1")
    .to("#ppImg", {x: 0, duration: 1, ease: "power1.easeOut"}, "-=0.5")
    .to("#mainH2", {x: 0, duration: 2, ease: "power1.easeOut"}, "-=0.2")
}
    
        
    