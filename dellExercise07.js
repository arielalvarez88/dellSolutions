// Exercise 7

const playBtn = document.querySelector(".play[data-video='6200113649001']");
playBtn.addEventListener("click",(e)=>{
    e.stopImmediatePropagation();
});