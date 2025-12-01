/**
 * Counter Program by (Abdulkafiy Abdulkabir)
 * Enable counting with Buttons,
 * For both increase count &amp; decrease count
 * It has reset button as well,
 * for clearing out recently counted number.
 */

/**
 * Select html element with an ID attributes from HTML
 * Note that when utlizing querySelector,
 * Ensure you have attributes identifier,
 * Before the actual attributes value.
 */
const displayCount = document.querySelector('#counter-value');
const decrementBtn = document.querySelector('#decrement');
const incrementBtn = document.querySelector('#increment');
const resetBtn = document.querySelector('#reset');


// Count state init count
let count = 0


const updateDisplayCount = () => {
    displayCount.textContent = count;
}; // Display Count Func

const setDecreaseCount = () => {
    count --;
    updateDisplayCount();
}; // Decrease Count Func

const setIncreaseCount = () => {
    count ++;
    updateDisplayCount();
}; // Increase Count Func 

const setResetCount = () => {
    count = 0;
    updateDisplayCount();
}; // Reset / Clear Recently Counted Num

// Event Listener Binded with Buttons
decrementBtn.addEventListener('click', setDecreaseCount);
incrementBtn.addEventListener('click', setIncreaseCount);
resetBtn.addEventListener('click', setResetCount);
