# Dell technical evaluation

## Exercise 2 - How to apply a click event to all paragraphs except for the last?

Answer:
```
const pElements = document.querySelectorAll("p");
for(let i = 0; i < pElements.length - 1; i++){
    pElements[i].addEventListener("click", ()=>console.log("click"));
}
```