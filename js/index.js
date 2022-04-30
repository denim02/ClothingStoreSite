/* File Name: index.js */
/* Programmed by Deni Mastori */
// Used to change the page that the "Go to Store" button links to and to underline the option chosen by the user

function changeToM() {
    if(!document.getElementById("men-anchor").classList.contains("current-choice")) {
        document.getElementById("men-anchor").classList.add("current-choice");
        document.getElementById("women-anchor").classList.remove("current-choice");
        document.getElementById("store-anchor").href="store_men.html"; 
    }
}

function changeToF() {
    if(!document.getElementById("women-anchor").classList.contains("current-choice")) {
        document.getElementById("women-anchor").classList.add("current-choice");
        document.getElementById("men-anchor").classList.remove("current-choice");
        document.getElementById("store-anchor").href='store_women.html'; 
    }
}