// Colors - DARK MODE 
const darkMainBackground = "#000000";
const darkNameColor = "#C0C0C0";
const darkNavBar = "#808080";
const darkHighlightsContainer = "#5a5a5a";
const blackText = "#000000";
const whiteText = "#FFFFFF";
const altText = "#343a40";

// Colors - LIGHT MODE 

function toggleDarkMode(){
    localStorage.setItem("colorMode", "dark");

    // Main background
    document.body.style.backgroundColor = darkMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = darkMainBackground;

    // My name 
    document.getElementById("topContent").style.color = darkNameColor;

    // Highlights container
    document.getElementById("highlights-main-container").style.background = altText;

    // Highlights text
    document.getElementById("highlights-title").style.color = darkNameColor;

    // Card bodies 
    var cards = document.querySelectorAll('.card');
    for(var i = 0; i < cards.length; i++) {
        // cards[i].style.color="#708090";
        cards[i].style.color=darkNameColor;
        cards[i].style.background="#6c757d";
    }

    var car = document.querySelectorAll('.card-header');
    for(var i = 0; i < car.length; i++) {
        car[i].style.background="#343a40";
    }

    var car = document.querySelectorAll('.card-deck');
    for(var i = 0; i < car.length; i++) {
        car[i].style.background="#6c757d";
    }

    var car = document.querySelectorAll('.card-body');
    for(var i = 0; i < car.length; i++) {
        car[i].style.background="#6c757d";
    }

    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleLightMode(){
    localStorage.setItem("colorMode", "light");
    document.body.style.backgroundColor="green";
}

function colorCheck(){
    if (localStorage.getItem("colorMode") == null || localStorage.getItem("colorMode") == "dark"){
        toggleDarkMode();
    } else {
        toggleLightMode();
    }
}