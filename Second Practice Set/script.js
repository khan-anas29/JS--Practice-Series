// We need the mouse on complete screen not only inside the container part thus selecting window

window.addEventListener("mousemove",function(details){

    // shortening range of circle to be inside the mouse when mouse it at the extreme points (details.clientX is the mouse location)
    var xval=gsap.utils.mapRange(0,window.innerWidth,100,window.innerWidth-100,details.clientX)

    gsap.to(".container",{
        left: xval+"px",
        ease: Power3
    })
})