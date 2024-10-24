var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 100 + "px"
    blur.style.top = dets.y - 100 + "px"
})

var all = document.querySelectorAll("#nav h4")
all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "0.3px solid #FFF"
    })
})
all.forEach(function (elem) {
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0.3px solid #FFF"
        crsr.style.backgroundColor = "#95C11E"
    })
})

var are =document.querySelectorAll("#arrow ")
are.forEach(function(game){
    game.addEventListener("mouseenter",function(){
        crsr.style.scale=5
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "0.3px solid #FFF"
    }
    
    )
    game.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.backgroundColor = "#95C11E"
        crsr.style.border = "0px solid #95C11E"

    }
    
    )

}
)

var img = document.querySelectorAll("#nav img")
img.forEach(function (elema) {
    elema.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "0.3px solid #FFF"
    })
})

img.forEach(function (elema) {
    elema.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.backgroundColor = "#95C11E"
        crsr.style.border = "0px solid #95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "140px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -5%",
        end: "top -10%",
        scrub: true,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -50%",
        scrub: true,

    }

})
gsap.from("#page3 img,#page3-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: " top 20%",
        end: "top 15%",
        scrub: 3,
 
    }

})
// gsap.from(".img", {
//     scale: 0.8,
//     opacity: 0,
//     duration: 1,
//     // stagger: 0.3,
//     scrollTrigger: {
//         trigger: ".images",
//         scroller: "body",
//         // markers: true,
//         start: " top 50%",
//         end: "top 30%",
//         scrub: 2,

//     }

// })
gsap.from("#col1",{
    y:-70,
    x:-40,
    duration:1,
    scrollTrigger: {
        trigger: "#col1",
        scroller: "body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub: 2,

    }
})

gsap.from("#col2",{
    y:70,
    x:40,
    duration:1,
    scrollTrigger: {
        trigger: "#col1",
        scroller: "body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub: 2,

    }
})
gsap.from("#page4 h1",{
    y:-20,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        // markers:true,
        start:"top 70%",
        end:"top 80%",
        scrub: 2,

    }
}
    
)