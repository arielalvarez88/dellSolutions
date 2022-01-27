// Exercise 4
const  mobileScreenBreakpointInPixels = 767;
const catImgUrl = `https://placekitten.com/1280/425`;
function replaceImages(){
    if(window.innerWidth > mobileScreenBreakpointInPixels){
        const bannerImgContainer = document.querySelector(".rendition.content");
        bannerImgContainer.style.backgroundImage = `url(${catImgUrl})`;
        bannerImgContainer.style.backgroundSize = "100% 100%";
        bannerImgContainer.style.backgroundRepeat = "no-repeat";

    }else{
        const mobileHeaderImg = document.querySelector("img.header-img");
        mobileHeaderImg.src = catImgUrl;
    }
}
replaceImages();
//Screen size changes make sure the cat img is set.
window.addEventListener("resize", ()=>{
    replaceImages();
});