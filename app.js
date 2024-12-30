// Select the app div and button
const appDiv = document.getElementById("app");
const changeContentButton = document.getElementById("change-content");

// Initial content
let contentIndex = 0;
const contentArray = [
    "Welcome to the MERN Stack Practice App!",
    "MERN stands for MongoDB, Express, React, and Node.js.",
    "Keep practicing, and you'll master it in no time!",
];

// Change content on button click
changeContentButton.addEventListener("click", () => {
    contentIndex = (contentIndex + 1) % contentArray.length;
    appDiv.innerHTML = `<p>${contentArray[contentIndex]}</p>`;
});

// Initial load message
appDiv.innerHTML = `<p>${contentArray[contentIndex]}</p>`;
