
const onIcon = document.querySelector(".icon-on");
const myModes = document.querySelector(".modes");
const offIcon = document.querySelector(".icon-off");
const myIcon = document.querySelector(".icon");
const myModewhite = document.querySelector(".mode-white");
const myModea = document.querySelector(".mode-a");
const myModeb = document.querySelector(".mode-b");
const myModec = document.querySelector(".mode-c");
const myModesombre = document.querySelector(".mode-sombre");
const myBody = document.querySelector(".body");
// 
onIcon.addEventListener("click", ()=>{
    myModes.style.transform = "translateX(200px)";
    myIcon.style.background = "black";
    onIcon.style.zIndex = "-1";
    offIcon.style.zIndex = "1";
    myModes.style.transition = "0.9s";});
offIcon.addEventListener("click", ()=>{
        myModes.style.transform = "translateX(-200px)";
        myIcon.style.background = "white";
        offIcon.style.zIndex = "-1";
        onIcon.style.zIndex = "1";
        myModes.style.transition = "0.9s";});

// 
myModewhite.addEventListener("click", ()=>{
myBody.style.background ="white";
myBody.style.color = "black";
});
myModesombre.addEventListener("click", ()=>{
    myBody.style.background ="black";
    myBody.style.color = "white";
    });
    myModea.addEventListener("click", ()=>{
        myBody.style.background ="linear-gradient(200deg,blue,skyblue)";
        myBody.style.color = "white";
        });
        myModeb.addEventListener("click", ()=>{
            myBody.style.background ="linear-gradient(90deg, orange,orangered)";
            myBody.style.color = "white";
            });
            myModec.addEventListener("click", ()=>{
                myBody.style.background ="linear-gradient(45deg, rgb(3, 180, 180),rgb(7, 113, 7))";
                myBody.style.color = "white";
                });

