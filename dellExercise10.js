//Exercise 10

const filterAccordions = document.querySelectorAll(".leftanav__option__container fieldset.anavmfe__accordion__item");
const baseResultsUrl = 'https://www.dell.com/en-us/member/shop/dell-laptops/sr/laptops/xps';
const dataToCreateLinks = [];
Array.from(filterAccordions).forEach((filterAccordion)=>{
    try{
        const accordionHeader = filterAccordion.querySelector(".anavmfe__accordion__item__name");

        const filterIds = Array.from(filterAccordion.querySelectorAll("input[type=checkbox][name]")).map(filterInput=>filterInput.getAttribute("name"));
        if(filterIds.length <=0 ){
            return;
        }
        const url = new URL(baseResultsUrl);
        url.searchParams.delete("appliedRefinements");
        url.searchParams.set("appliedRefinements", filterIds.join(","))
        dataToCreateLinks.push({text: accordionHeader.innerText, url: url.toString()});
    }catch(e){
        return;
    }
});


//A container for the new links
const linkElements = document.createElement("div");

//Locate the parent element of the new links.
const linksParentContainer = document.querySelector("#cat-fran-rows");

//In this loop I create the links and append those to linksParentContainer
for(let i = 0; i < dataToCreateLinks.length; i++){
    const dataToCreatelink =  dataToCreateLinks[i];
    const newLink = document.createElement("a");
    newLink.setAttribute("href", dataToCreatelink.url);
    newLink.innerText = dataToCreatelink.text;
    const isLastLink = i === dataToCreateLinks.length -1;
    if(!isLastLink){
        newLink.style.margin = "0 10px 0 0";
    }
    linkElements.appendChild(newLink);
}

//Finally place the container of the links in to it's final place
linksParentContainer.insertBefore(linkElements, linksParentContainer.firstChild);
