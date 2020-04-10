let iteration = {
    dots: 0,
},
DOMDot = document.querySelector("#dot" + iteration.dots),
DOMDots = document.querySelectorAll(".dots>div"),
arrColor = ["indigo", "green", "red", "blue", "yellow", "maroon", "silver", "cold"];

function loaderDots() {
    for(let i = 0; i < 8; i++) {
        //DOMDots[i].style.display = "block";
        DOMDots[i].style.backgroundColor = arrColor[iteration.dots];
        
    }

    DOMDot.style.display = "none";

    if(iteration.dots < 8) {
        ++iteration.dots;
    } else {
        iteration.dots = 0;
    }
}

setInterval(loaderDots, 1000);
