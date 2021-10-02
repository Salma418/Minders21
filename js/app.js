// >>>>>>>>>>>>>>>>>>>>>>>    NAV Section -   Planets Hover effect        <<<<<<<<<<<<<<<<<<<<<<<<<<<<
let hoverArray = document.getElementsByClassName("planetHoverText"); 
function planetHover(str){
    for(let i=0; i<hoverArray.length; i++){
        if(str===hoverArray[i].innerHTML){
            unfade(hoverArray[i], 10);
            break;
        }
    }
}

function planetUnhover(str){
    for (let i = 0; i < hoverArray.length; i++) {
        if (str === hoverArray[i].innerHTML) {
            fade(hoverArray[i], 10);
            break;
        }
    }
}


//>>>>>>>>>>>>>>>>>>>>>>>>     Slogan Section -    UFO animation        <<<<<<<<<<<<<<<<<<<<<<<<<<<
var width = document.getElementById("ufoContainer").offsetWidth;
var offsetHeight = document.getElementById("vidContainer").offsetHeight; 
var startMotion = false;

let coords = [];  // [x/left, y/top, width, height] of each point
var recentDim=[]; // [recentHeight, recentWidth]

window.onscroll = function () {  // Animation starts when the user scrolls down/clicks the Slogan icon
    startMotion = true;
} 

for(let i=25, w=0, h=0; i<= 2000; i+=6, w+=1.5, h+=0.5){ // Forward
    let arr = [(width)-i, 50+h, 20+w, 100]; 
    coords.push(arr);
    recentDim=[50+h, 20+w];
}

for(let i=800, w=0; i>width/5; i-=3, w+=1.7){ // Backward
    let arr = [(width/2)-i, recentDim[0], recentDim[1]+w, 150];
    coords.push(arr);
}

var index = 0, motionInterval = setInterval(MoveUFO, 5);
function MoveUFO(){ // Function to move the UFO over the coords[]
    if(!startMotion) return 0;
    let obj = document.getElementById("ufoImage");
    if(index<coords.length){
        let pos= coords[index], x = pos[0], y = pos[1], w= pos[2], h = pos[3];
        obj.style.left = x + "px";
        let t = y+offsetHeight; // The height of the 1st div is added to the new height to fix the abs position
        obj.style.top = t + "px";
        obj.style.width= w+"px";
        obj.style.height= h+"px";
        index++;
        //console.log("["+x+","+y+"] left "+x+" top: "+y+ " index: "+index);
    } else{
        clearInterval(motionInterval);
        unfade(document.getElementById("lightImg"), 30);
        unfade(document.getElementById("hiddenSlogan"), 50);
    }
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>    FADE & UNFADE FNCS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function fade(element, t) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, t);
}

function unfade(element, t) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, t);
}



// >>>>>>>>>>>>>>>>>>>>>>   Memories section (Planets) <<<<<<<<<<<<<<<<<<<<<<<<<<<
const planets = document.querySelectorAll('.planet');
const p_radii = [50,50,50,50,50,50,50,50,50,50,50,50,50,50];
let p_radians = new Array(14).fill(0);
const p_velocities = [0.10, 0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.20,0.21,0.22,0.23];

setInterval( ()=> {
  planets.forEach( (planet, index)=>{
   
    planet.style.left = `${Math.cos(p_radians[index]) * p_radii[index]}vmin`;

    let t = (Math.sin(p_radians[index]) * p_radii[index]) + 100;

    planet.style.top =  `${(Math.sin(p_radians[index]) * p_radii[index])}vmin`;
    p_radians[index] += p_velocities[index] * 0.02;
  })


  m_orbit.style.left = `${venusX()}vmin`;
  m_orbit.style.top = `${venusY()}vmin`;
}, 1000/60)


// >>>>>>>>>>>>>>>>>>>>>>>>  Highboard section  <<<<<<<<<<<<<<<<<<<<<<<<<<
var overlays = document.querySelectorAll(".overlay");

function show(index) {
    overlays[index].style.top = "0";
}

function hide(index) {
    overlays[index].style.top = "100%";
}

var tech = document.querySelector(".Ahmed");
var oper = document.querySelector(".Marwan");
var creative = document.querySelector(".Donia");
var internal = document.querySelector(".Tarek");
var sections = [
    tech,
    oper,
    creative,
    internal
];

function sectionController(secId) {
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
        if (i == secId) {
            sections[i].style.display = "flex";
        }
    }
}


