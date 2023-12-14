var rect = document.querySelector(".container")

rect.addEventListener("mousemove",function(details){
    var rect_location=rect.getBoundingClientRect();
    // console.log(rect_location);
    // console.log(details.clientX);
    // this will give us x value only inside container
    var inside_rect = details.clientX
    
    // check if mouse is inside container and behind center
    if((inside_rect-rect_location.left)<rect_location.width/2){
        console.log("Left");
    }
    else{
        console.log("Right");
    }
})