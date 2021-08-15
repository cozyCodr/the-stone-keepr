//Is device Mobile or Desktop
const isMobile = !window.matchMedia("only screen and (min-width: 768px)").matches;


//Image variable
const image = document.querySelector("#background-img");

//Heading Variables
const firstHeading = document.querySelector(".first-heading");
const secondHeading = document.querySelector(".second-heading");
const thirdHeading = document.querySelector(".third-heading");
const fourthHeading = document.querySelector(".fourth-heading");
const fifthHeading = document.querySelector(".fifth-heading");
const sixthHeading = document.querySelector(".sixth-heading");

//Anchor Variables
const firstAnchor = document.querySelector(".first-anchor");
const secondAnchor = document.querySelector(".second-anchor");
const thirdAnchor = document.querySelector(".third-anchor");


const homeSection = document.querySelector(".initial");

//Event Listeners
if(isMobile){
    
    window.addEventListener("click", fadeInMenu);
    
    firstHeading.classList.add("fadeInUp1");
    fourthHeading.classList.add("fadeInUp1");
    
    secondHeading.classList.add("fadeInUp2");
    fifthHeading.classList.add("fadeInUp2");
    
    thirdHeading.classList.add("fadeInUp3");
    sixthHeading.classList.add("fadeInUp3");
    
    image.classList.add("mobile-view-img");
    
} else {
    
//    On Mouse Over
    firstHeading.addEventListener("mouseover", function(){
        addHoverState("first");
    });
    secondHeading.addEventListener("mouseover", function(){
        addHoverState("second");
    });
    thirdHeading.addEventListener("mouseover", function(){
        addHoverState("third");
    });
    
//    On Mouse Leave
    firstHeading.addEventListener("mouseout", function(){
        removeHoverState("first");
    });
    secondHeading.addEventListener("mouseout", function(){
        removeHoverState("second");
    });
    thirdHeading.addEventListener("mouseout", function(){
        removeHoverState("third");
    });
    
    //Desktop view of image
    image.classList.add("desktop-view-img");
}

//Functions

function fadeInMenu(){
    
    if( homeSection.classList.contains("home")){
        
        firstHeading.style.display = "none";
        secondHeading.style.display = "none";
        thirdHeading.style.display = "none";
               
        fourthHeading.style.display = "block";
        fifthHeading.style.display = "block";
        sixthHeading.style.display = "block";
        
        homeSection.classList.toggle("home");
    } 
    
    else {
        firstHeading.style.display = "block";
        secondHeading.style.display = "block";
        thirdHeading.style.display = "block";
               
        fourthHeading.style.display = "none";
        fifthHeading.style.display = "none";
        sixthHeading.style.display = "none";
        
        homeSection.classList.toggle("home");
    }
    
}

function addHoverState(e){
    switch(e){
        case "first":
            firstAnchor.textContent = "About";
            firstAnchor.href = "About.html";
            break;
        case "second":
            secondAnchor.textContent = "Work";
            secondAnchor.href = "Work.html";
            break;
        case "third":
            secondAnchor.textContent = "Contact";
            thirdAnchor.href = "Contact.html";
            break;
    }
}

function removeHoverState(e){
    switch(e){
        case "first":
            firstAnchor.textContent = "Home.";
            firstAnchor.href = "#";
            break;
        case "second":
            secondAnchor.textContent = "I'm";
            secondAnchor.href = "#";
            break;
        case "third":
            thirdAnchor.textContent = "Bright";
            thirdAnchor.href = "#";
            break;
    }
}


