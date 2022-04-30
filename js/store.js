/* File Name: store.js */
/* Programmed by Deni Mastori */

// The mouseOverImage, mouseOutImage, and mouseClickImage functions are used for the image slideshows in the Store page.
// They allow the user to hover over different color choices to temporarily change the main clothing image or to click
// on one of these colors to permanently swap the main image.
function mouseOverImage(mousedOverElement, hostImage) {
    var img = document.getElementById(hostImage);
    mousedOverElement.style.opacity = "0.5";
    img.setAttribute('src', mousedOverElement.getAttribute('src'));
}

function mouseOutImage(mousedOutElement, hostImage) {
    var img = document.getElementById(hostImage);
    mousedOutElement.style.opacity = "1";
    var default_src = img.getAttribute('data-default-img');
    img.setAttribute('src', default_src);
}

function mouseClickImage(clickedElement, hostImage) {
    var img = document.getElementById(hostImage);
    img.setAttribute('data-default-img', clickedElement.getAttribute('src'));

    var color_headers = document.getElementsByClassName("color-header");
    for(var i = 0; i < color_headers.length; i++) {
        if(color_headers[i].getAttribute("data-associated-img") == hostImage)
            color_headers[i].classList.remove("active");
    }

    document.getElementById(clickedElement.getAttribute("data-associated-header")).classList.add("active");
}


// The switchClothesType method is used to switch the different clothing type tabs in the Store pages.
// This is done by setting the tabs' displays to none or flex depending on whether they're active or not.
function switchClothesType(tabId) {
    var tabs = document.getElementsByClassName("tab");

    for(let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    var tab_buttons = document.getElementsByClassName("tab-button");
    for(let i = 0; i < tab_buttons.length; i++) {
        if(tab_buttons[i].classList.contains("current-choice"))
        tab_buttons[i].classList.remove("current-choice");
    }

    document.getElementById(tabId).style.display = "flex";
    
    switch(tabId) {
        case 'sweaters-tab':
            tab_buttons[0].classList.add("current-choice");
            break;
        case 'hoodies-tab':
            tab_buttons[1].classList.add("current-choice");
            break;
        case 'jackets-tab':
            tab_buttons[2].classList.add("current-choice");
            break;
    }
}

// The setDefaultTab() method is used to set one of the tabs as active when the page is first loaded.
function setDefaultTab() {
    document.getElementById("sweaters-tab").style.display = "flex";
}