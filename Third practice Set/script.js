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
    throttleFunction(() => {
        
    }, 500));


