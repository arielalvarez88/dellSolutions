// Exercise 6

const bannerSection = document.querySelector("#tt-content > div:nth-child(2)");
const mainContent = bannerSection.parentElement;
const chooseATailoredSection = document.querySelector("#tt-content > div:nth-child(4)");
bannerSection.remove();
//Insert the top banner section before the "Choose a Tailered..." section
mainContent.insertBefore(bannerSection, chooseATailoredSection);
