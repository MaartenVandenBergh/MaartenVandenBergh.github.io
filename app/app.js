const HEADER_HEIGHT = document.getElementsByClassName("header")[0].clientHeight;
const COLLAPSED_CLASSNAME = "collapsed";

const scrollToTop = () => {
    window.scrollTo(0,0);
}
const scrollTo = (element) => {
    window.removeEventListener("scroll", scrollEventHandler);
    const header = document.getElementsByClassName("header")[0];
    if(header.classList.contains("withNavigation")){
        header.classList.remove("withNavigation");
    }
    element.scrollIntoView();
    const headerHeight = document.getElementsByClassName("header")[0].clientHeight;
    window.scrollBy(0, -headerHeight);
    window.addEventListener("scroll", scrollEventHandler);
}

const update = (time) => {
    if(time > previousFrameTime + 100){
        const offset = window.pageYOffset;
        const header = document.getElementsByClassName("header")[0];
        const content = document.getElementsByClassName("content")[0];
        if(offset >= HEADER_HEIGHT - 66){
            let marginTop = HEADER_HEIGHT;
            if(!header.classList.contains(COLLAPSED_CLASSNAME)){
                header.classList.add(COLLAPSED_CLASSNAME);
                marginTop += 49;
            }
            if(previousOffset > offset){
                if(!header.classList.contains("withNavigation")){
                    header.classList.add("withNavigation");
                }
            }
            else{
                if(header.classList.contains("withNavigation")){
                    header.classList.remove("withNavigation");
                }
            }
            content.style.marginTop = marginTop + "px";
            previousFrameTime = time;
        }
        else{
            if(header.classList.contains(COLLAPSED_CLASSNAME)){
                header.classList.remove(COLLAPSED_CLASSNAME);
                content.classList.remove(COLLAPSED_CLASSNAME);
                content.style.marginTop = '';
                previousFrameTime = time;
            }
            if(header.classList.contains("withNavigation")){
                header.classList.remove("withNavigation");
            }
        }
        previousOffset = offset;
    }


    return false;
};

let previousOffset = 0;
let previousFrameTime = 0;
const scrollEventHandler = (event) => {
    requestAnimationFrame(update);
}
window.addEventListener("scroll", scrollEventHandler);

console.log("js loaded");

