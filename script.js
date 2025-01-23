var hasKey = false;
var padlock = "locked";

function tryDoor() {
    if (padlock === "locked") {
        showModal("The door is locked! Find the key first.");
    } else {
        showModal("The door is unlocked! You can escape now.");
    }
}

function tryPadlock() {
    if (hasKey == false) {
        showModal("Find the key!");
    } else {
        padlock = "unlocked";
        alert("You unlocked the padlock!");
        openDoor();
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }
}

function showModal(message) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = message;
    modal.style.display = "block";
    console.log("Modal displayed with message:", message);
}

function pickupKey() {
    console.log("The door is locked");
    hasKey = true;
    alert("You found the key and put it in your pocket! Be quick before it's too late");
    document.getElementById("key1").style.display = "none";
}

function openDoor() {
    if (padlock == "unlocked") {
        document.getElementById("escape").style.visibility = "visible";
    }
}

document.addEventListener("mousemove", function(event) {
    const hand = document.getElementById("hand");
    hand.style.left = `${event.clientX - 50}px`;
    hand.style.top = `${event.clientY - 50}px`;
});

document.addEventListener("mousedown", function(event) {
    if (event.button === 0) {
        const hand = document.getElementById("hand");
        hand.classList.remove("hand-open");
        hand.classList.add("hand-closed");
    }
});

document.addEventListener("mouseup", function(event) {
    if (event.button === 0) {
        const hand = document.getElementById("hand");
        hand.classList.remove("hand-closed");
        hand.classList.add("hand-open");
    }
});

document.getElementById("modal-close").addEventListener("click", function() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
});