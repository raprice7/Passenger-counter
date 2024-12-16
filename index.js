let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    console.log('save button clicked');
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0;
    count = 0
}
function clearEntries() {
    console.log("Button clicked");
    count = 0; // Reset the count
    saveEl.textContent = "Previous entries: "; // Reset "Previous entries"
    countEl.textContent = 0; // Reset the displayed count
    console.log(count, saveEl, countEl); // Debug log
};

