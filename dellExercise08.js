// Exercise 8
const categoriesTextAreas = document.querySelectorAll(".category-links [class*='category-text']");
categoriesTextAreas.forEach((category)=>{
    const categoryHeader = category.querySelector("h5");
    if(!categoryHeader){
        return;
    }
    const firstWordInHeader = categoryHeader.innerText.split(" ")[0];
    if(!firstWordInHeader){
        return;
    }
    const listItems = category.querySelectorAll("li a");
    for(let li of listItems){
        li.innerText = `${firstWordInHeader} - ${li.innerText}`;
    }
})