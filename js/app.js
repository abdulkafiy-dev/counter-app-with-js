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

// Store Minimum &amp; Maximum Limits for counting
const MIN_LIMIT = 0;
const MAX_LIMIT = 25;

const updateDisplayCount = () => {
    /** 
     * if limit MAX_LIMIT, counter color changes to red
     * &amp; if reaches MIN_LIMIT it changes to yellow
    */
    if(count >= MAX_LIMIT){
        displayCount.style.color = "red";
    } else if(count <= MIN_LIMIT){
        displayCount.style.color = "yellow";
    } else{
        displayCount.style.color = "white";
    }
    displayCount.textContent = count;
}; // Display Count Func

const setDecreaseCount = () => {
    if(count > MIN_LIMIT)
    count --;
    updateDisplayCount();
}; // Decrease Count Func

const setIncreaseCount = () => {
    if(count < MAX_LIMIT)
    count ++;
    updateDisplayCount();
}; // Increase Count Func 

const setResetCount = () => {
    count = 0;
    count = MIN_LIMIT;
    updateDisplayCount();
}; // Reset / Clear Recently Counted Num

// Event Listener Binded with Buttons
decrementBtn.addEventListener('click', setDecreaseCount);
incrementBtn.addEventListener('click', setIncreaseCount);
resetBtn.addEventListener('click', setResetCount);
