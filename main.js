

let aboutUsButton = document.querySelector(".aboutButton");
let contactButton = document.querySelector(".contactButton");
let menuButton = document.querySelector(".menuButton");


aboutUsButton.addEventListener("click", aboutFunc);
contactButton.addEventListener("click", contFunc);
menuButton.addEventListener("click", menuFunc);



function aboutFunc(){
    document.getElementById("contact").classList.remove("contact");
    document.getElementById("contact").classList.add("contactNone");
    document.getElementById("menu").classList.remove("menu");
    document.getElementById("menu").classList.add("menuNone");
    document.getElementById("aboutUs").classList.remove("aboutUsNone");
    document.getElementById("aboutUs").classList.add("aboutUs");
};


function contFunc(){
    document.getElementById("aboutUs").classList.remove("aboutUs");
    document.getElementById("aboutUs").classList.add("aboutUsNone");
    document.getElementById("menu").classList.remove("menu");
    document.getElementById("menu").classList.add("menuNone");
    document.getElementById("contact").classList.remove("contactNone");
    document.getElementById("contact").classList.add("contact");
};


function menuFunc(){
    document.getElementById("aboutUs").classList.remove("aboutUs");
    document.getElementById("aboutUs").classList.add("aboutUsNone");
    document.getElementById("contact").classList.remove("contact");
    document.getElementById("contact").classList.add("contactNone");
    document.getElementById("menu").classList.remove("menuNone");
    document.getElementById("menu").classList.add("menu");

}