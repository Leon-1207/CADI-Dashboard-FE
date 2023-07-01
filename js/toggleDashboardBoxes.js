const ANIMATION_DURATION = 300;
const showNewCustomersButton = document.getElementById('show-new-customers-button');
const hideNewCustomersButton = document.getElementById('hide-new-customers-button');
const newCustomersBox = document.getElementById('new-customers-box');
const showAllCustomersButton = document.getElementById('show-all-customers-button');
const hideAllCustomersButton = document.getElementById('hide-all-customers-button');
const allCustomersBox = document.getElementById('all-customers-box');

function setVisibility(box, visibility) {
    if (box.classList.contains("box-closed") === visibility) {
        box.classList.toggle("box-closed")
        box.style.height = visibility ? `${box.scrollHeight + 16 * 2}px` : 0
    }
}

function scrollToBoxAfterDelay(box) {
    const delay = Math.round(ANIMATION_DURATION / 2);
    setTimeout(() => box.scrollIntoView({ behavior: "smooth" }), delay);
}

showNewCustomersButton.addEventListener('click', () => {
    const delay = allCustomersBox.classList.contains("box-closed") ? 0 : ANIMATION_DURATION;
    setTimeout(() => {
        setVisibility(newCustomersBox, true)
        scrollToBoxAfterDelay(newCustomersBox);
    }, delay);
    setVisibility(allCustomersBox, false)
})
hideNewCustomersButton.addEventListener('click', () => {
    setVisibility(newCustomersBox, false)
})
showAllCustomersButton.addEventListener('click', () => {
    const delay = newCustomersBox.classList.contains("box-closed") ? 0 : ANIMATION_DURATION;
    setTimeout(() => {
        setVisibility(allCustomersBox, true)
        scrollToBoxAfterDelay(allCustomersBox);
    }, delay);
    setVisibility(newCustomersBox, false)
})
hideAllCustomersButton.addEventListener('click', () => {
    setVisibility(allCustomersBox, false)
})