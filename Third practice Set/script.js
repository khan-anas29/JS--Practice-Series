// Reducing the time of execution using Throttling
// Throttling Function
var container=document.querySelector(".container")

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}


container.addEventListener("mousemove",
    throttleFunction((details) => {
        // Creating a div
        var div=document.createElement("div")
        // Add class to it
        div.classList.add("imagediv")
        // Declare the position wrt container
        div.style.left = details.clientX +"px"
        div.style.top = details.clientY +"px"
        // add it to body
        document.body.appendChild(div)

        // clear it after some time
        setTimeout(function(){
            div.remove()
        },1500)
        
    }, 500));


