const input = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

input.addEventListener("input", ontextSpanInput);

let minFontSize = 16;
let maxFontSize = 96;
function ontextSpanInput(event) {
    console.dir(textSpan.style.fontSize
    );
console.log(input.marginLef);
    if (input.marginLeft) {
        minFontSize -=2
       textSpan.style.fontSize = `${minFontSize}px`
    console.log(`${textSpan.style.fontSize}px`);  
    }
    else {
        minFontSize += 2
               textSpan.style.fontSize = `${minFontSize}px`
    console.log(`${minFontSize}px`);  
    }

   textSpan.style.fontSize = `${minFontSize}px`
    // if (textSpan.style.fontSize === `${maxFontSize}px`) {
    //     minFontSize -=2
    //    textSpan.style.fontSize = `${minFontSize}px`
    // console.log(`${textSpan.style.fontSize}px`);  
    // }
    // else {
    //     minFontSize += 2
    //            textSpan.style.fontSize = `${minFontSize}px`
    // console.log(`${minFontSize}px`);  
    // }
    
};

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.