const chipsForm = document.querySelector('.chips-input-form');
const chipsInput = document.querySelector('.chips-input-box');
const chipsDisplay = document.querySelector('.chips-display-box');
const chip = document.querySelector('.chip');

const createChip = (chip) => {
    const createChipTemplate = `
    <div class="chip">${chip}<span class="chip-close">x</span></div>
    
    `;
    chipsDisplay.innerHTML += createChipTemplate;
}

const getChips = (e) => {
    e.preventDefault();
    const chip = chipsInput.value;
    if(chip.length) {
        createChip(chip);
        chipsForm.reset();
    }
    
}

chipsForm.addEventListener('submit', getChips);

chipsDisplay.addEventListener('click', (e) => {

    if(e.target.classList.contains('chip-close')) {
        e.target.parentElement.remove();
    }
})