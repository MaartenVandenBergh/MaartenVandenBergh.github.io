const HEADER_HEIGHT = document.getElementsByClassName("header")[0].clientHeight;
const COLLAPSED_CLASSNAME = "collapsed";

let busy = false;
const update = (time) => {
    if(time > previousFrameTime + 250){
        const offset = window.pageYOffset;
        const header = document.getElementsByClassName("header")[0];
        const content = document.getElementsByClassName("content")[0];
        if(offset >= HEADER_HEIGHT - 66){
            if(!header.classList.contains(COLLAPSED_CLASSNAME)){
                header.classList.add(COLLAPSED_CLASSNAME);
                content.style.marginTop = HEADER_HEIGHT + "px";
                previousFrameTime = time;
            }
        }
        else{
            if(header.classList.contains(COLLAPSED_CLASSNAME)){
                header.classList.remove(COLLAPSED_CLASSNAME);
                content.classList.remove(COLLAPSED_CLASSNAME);
                content.style.marginTop = '';
                previousFrameTime = time;
            }
        }
    }


    return false;
};
let previousFrameTime = 0;
window.onscroll = (event) => {
    requestAnimationFrame(update);
}

console.log("js loaded");
//window.addEventListener("scroll", adjustHeader);
console.log("listeners added");

