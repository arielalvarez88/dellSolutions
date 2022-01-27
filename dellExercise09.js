/** Exercise 9 : In the point 2, you asked to replace all the product images from the networking section with ones in
 * the "Cameras, Photo & Video" section. There is no "Cameras, Photo & Video" section in the last version of the page,
 * so I used the product images from the "Webcams" section instead. **/

// Exercise 9.1.i
const links = document.querySelectorAll("#topcontent .quick-link [data-testid='quicklink_module_link']");
for(let link of links){
    link.addEventListener("click", (e)=>{
        e.preventDefault();
    });
}

// Exercise 9.1.ii

const categorLinkTextToCagegoryImgSelector = {
    "monitors": "img[alt='Monitors & Monitor Accessories']",
    "keyboards & mice": "img[alt='Keyboards & Mice']",
    "audio": "img[alt='Headphones, Speakers & Audio Systems']",
    "home electronics": "img[alt='Home Electronics']",
    "printers, scanners, ink & toner": "img[alt='Printers, Scanners, Ink & Toner']",
    "docking stations": "img[alt='Docking Stations']",
    "software & downloads": "img[alt='Software']",
    "gaming accessories": "img[alt='Gaming Electronics & Accessories']",
    "batteries & adapters": "img[alt='Power, Batteries & Adapters']",
    "hard drives, ssds & storage": "img[alt='Storage, Drives & Media']",
    "pc accessories": "img[alt='PC Accessories']",
    "webcams": "img[alt='Webcams & Cameras']",
    "wi-fi & networking": "img[alt='WiFi & Networking']",
    "laptop bags & carrying cases": "img[alt='Laptop Bags & Cases']",
    "replacement parts & upgrades": "img[alt='Parts']",
};
const rows = document.querySelectorAll("#topcontent .quick-link .row");
for(let row of rows){
    const cols = row.children;
    for(let i = 0; i < cols.length; i++){
        let backgroundImageColorForSection;
        const isLeftColumn = i === 0 && cols.length > 1;
        const isRightColumn = i === (cols.length - 1) && cols.length > 1;
        const isMiddleColumn = !isLeftColumn && !isRightColumn;
        if(isLeftColumn){
            backgroundImageColorForSection = "purple";
        }else if(isRightColumn){
            backgroundImageColorForSection = "green";
        }else if(isMiddleColumn){
            backgroundImageColorForSection = "orange";
        }
        const linkText = getCategoryLinkTextFromAncestor(cols[i]);
        let categoryImage;
        if(linkText.toLowerCase() in categorLinkTextToCagegoryImgSelector){
            categoryImage =  document.querySelector(categorLinkTextToCagegoryImgSelector[linkText.toLowerCase()]);
        }

        if(categoryImage){
            categoryImage.parentElement.style.backgroundColor = backgroundImageColorForSection;
        }
    }
}

/**
 * This function returns the text of the first category link that is a descendant of the element received in the params.
 * If no link is found, we return an empty string.
 * @param {HTMLElement} linkAncestorElement - Ancestor element that contains the category link as one of it's descendants.
 * @returns {string}
 */
function getCategoryLinkTextFromAncestor (linkAncestorElement){
    const  categoryLink = linkAncestorElement.querySelector("[data-testid='quicklink_module_link']");
    if(!categoryLink) {
        return "";
    }
    const TEXT_COL_CHILDREN_IDX = 1;
    const linkText = categoryLink.children[TEXT_COL_CHILDREN_IDX];
    if(!linkText){
        return "";
    }
    return linkText.innerText;
}

// Exercise 9.2

/**
 * This function the returns the img elements of the products in a category module. It needs the selector of the
 * main image of the category module. In the case that we can't find the images we return an empty array.
 * @param {string} categoryModuleMainImageSelector - A CSS selector to find the main image of the category module.
 * @returns {HTMLElement[]}
 */
function getProductImagesFromCategoryModule(categoryModuleMainImageSelector){
    try{
        const categoryModuleMainImage = document.querySelector(categoryModuleMainImageSelector);
        const  categoryModuleProductImages = categoryModuleMainImage.closest(".row").querySelectorAll("[data-testid='featured_module_image']");
        return categoryModuleProductImages;
    }catch(e){
        console.error(e);
        return [];
    }
}

const wifiAndNetworkingCategoryProductImages = getProductImagesFromCategoryModule("[alt='WiFi & Networking']");
const webcamCategoryProductImages = getProductImagesFromCategoryModule("img[alt='Webcams & Cameras']");
for(let i=0; i <  wifiAndNetworkingCategoryProductImages.length; i++){
    if(i < webcamCategoryProductImages.length ){
        wifiAndNetworkingCategoryProductImages[i].replaceWith(webcamCategoryProductImages[i].cloneNode(true));
    }
}

//Exercise 9.3 (requires function getProductImagesFromCategoryModule defined above in 9.2)
(function(){
    const productImgs = getProductImagesFromCategoryModule('[alt=\'Power, Batteries & Adapters\']');
    let pricesSum = 0;
    if(productImgs.length > 0){
        const featureModule = productImgs[0].closest("[data-testid='category_module_section']");
        const textsWithProductPrices = featureModule.querySelectorAll("[data-testid='featured_module_price']");
        pricesSum = Array.from(textsWithProductPrices).reduce((acc, textWithProductPrice)=>{
            const matchForMoneyAmount = textWithProductPrice.innerText.match(/.*\$(\d+\.\d+).*/);
            const productPrice = matchForMoneyAmount.length > 1 ? Number(matchForMoneyAmount[1]) : 0;
            return acc + productPrice;
        },0);
    }
    alert(`The sum of prices for products in the "Power, Batteries & Adapters" section is: $${pricesSum}`);
})();
