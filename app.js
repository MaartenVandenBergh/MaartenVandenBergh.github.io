const header = document.getElementsByClassName("header")[0]
HEADER_HEIGHT = header.clientHeight;

header.style.top = "-" + (HEADER_HEIGHT - 50) + "px";

console.log("js loaded");
//window.addEventListener("scroll", adjustHeader);
console.log("listeners added");

