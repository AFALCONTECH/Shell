const backButton = document.getElementById("backButton");
const coinMeter = document.getElementById("coinMeter");
const noButton = document.getElementById("noButton");
const reviewScreen = document.getElementById("reviewScreen");
const yesButton = document.getElementById("yesButton");
const captureScreen = document.getElementById("captureScreen");
const thoughtInput = document.getElementById("thoughtInput");
const saveButton = document.getElementById("saveButton");
const savedMessage = document.getElementById("savedMessage");
let coinCount = 0;
let entries = [];

yesButton.addEventListener("click", function() {
    document.getElementById("openingScreen").style.display = "none";
    captureScreen.style.display = "flex";
    thoughtInput.focus();
});

function showEntries() {

    const entryList = document.getElementById("entryList");

    entryList.innerHTML = "";

    entries.forEach(function(entry) {

        const entryElement = document.createElement("div");

        const entryText = document.createElement("div");

entryText.textContent =
    "- " + entry.thought +
    " | " + entry.date +
    " -- " + entry.time;

const completeButton = document.createElement("button");

completeButton.textContent = "COMPLETED";
const progressButton = document.createElement("button");

progressButton.textContent = "IN PROGRESS";
progressButton.className = "progressButton";

if (entry.status === "in-progress") {
    progressButton.classList.add("progressActive");
}

progressButton.addEventListener("click", function() {

    entry.status = "in-progress";

    progressButton.classList.add("progressActive");

});
completeButton.className = "completeButton";

completeButton.addEventListener("click", function() {

    entry.status = "completed";

    coinCount++;
    coinMeter.textContent = "◉ " + coinCount;

    entries = entries.filter(function(item) {
        return item !== entry;
    });

    showEntries();

});

entryElement.appendChild(entryText);
entryElement.appendChild(completeButton);
entryElement.appendChild(progressButton);

entryList.appendChild(entryElement);

    });
}

noButton.addEventListener("click", function() {

    document.getElementById("openingScreen").style.display = "none";
    reviewScreen.style.display = "block";

    showEntries();

});

backButton.addEventListener("click", function() {

    reviewScreen.style.display = "none";
    document.getElementById("openingScreen").style.display = "flex";

});

saveButton.addEventListener("click", function() {

    const thought = thoughtInput.value.trim();

    if (thought === "") {
        return;
    }

    const now = new Date();

    const date = now.toLocaleDateString("en-US");
    const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });

    entries.push({
    thought: thought,
    date: date,
    time: time,
    status: "new"
});

    console.log("THOUGHT:", thought);
    console.log("CAPTURED:", date, time);

    savedMessage.style.display = "block";

    setTimeout(function() {

        savedMessage.style.display = "none";
        thoughtInput.value = "";

        captureScreen.style.display = "none";
        document.getElementById("openingScreen").style.display = "flex";

    }, 1000);
});
