const yesButton = document.getElementById("yesButton");
const captureScreen = document.getElementById("captureScreen");
const thoughtInput = document.getElementById("thoughtInput");
const saveButton = document.getElementById("saveButton");
const savedMessage = document.getElementById("savedMessage");

yesButton.addEventListener("click", function() {
    document.getElementById("openingScreen").style.display = "none";
    captureScreen.style.display = "flex";
    thoughtInput.focus();
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