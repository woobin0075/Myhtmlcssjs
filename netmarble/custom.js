//$('#adgamebar a').css({'background-position':'left'});
//$('#adgamebar a').css({'transition':'all 5s linear'}); 

function toggleSelectBox(selectBox) {
    selectBox.classList.toggle("active");
}

const selectBoxElements = document.querySelectorAll(".select");

selectBoxElements.forEach(selectBoxElement => {
    selectBoxElement.addEventListener("click", function(e) {
        const targetElement = e.target;
        const isOptionElement = targetElement.classList.contains("option");

        if(isOptionElement) {
            selectOption(targetElement)
        }
        toggleSelectBox(selectBoxElement);
    })
})

function selectOption(optionElement) {
    const selectBox = optionElement.closest(".select");
    const selectedElement = selectBox.querySelector(".selected-value");
    selectedElement.textContent = optionElement.textContent;
}