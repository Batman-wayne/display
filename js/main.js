// Colors - DARK MODE 
const darkMainBackground = "#000000";
const darkNameColor = "#C0C0C0";
const darkNavBar = "#808080";
const darkHighlightsContainer = "#5a5a5a";
const blackText = "#000000";
const whiteText = "#FFFFFF";
const altText = "#343a40";
const veryLightGray = "#D3D3D3";

// Colors - LIGHT MODE 
const lightMainBackground = "#FFFFFF";

function toggleIndexDarkMode(){
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
    var cards = document.querySelectorAll('.card-color-mod');
    for(var i = 0; i < cards.length; i++) {
        // cards[i].style.color="#708090";
        cards[i].style.color=darkNameColor;
        cards[i].style.background="#6c757d";
    }

    var butts = document.querySelectorAll('.btn-mod');
    for(var i = 0; i < butts.length; i++) {
        butts[i].style.color=whiteText;
        butts[i].style.background=altText;
    }

    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleIndexLightMode(){
    localStorage.setItem("colorMode", "light");

    // Main background
    document.body.style.backgroundColor = lightMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = lightMainBackground;

    // My name 
    document.getElementById("topContent").style.color = blackText;

    // Highlights container
    document.getElementById("highlights-main-container").style.background = whiteText;

    // Highlights text
    document.getElementById("highlights-title").style.color = blackText;

    // Card bodies 
    var cards = document.querySelectorAll('.card-color-mod');
    for(var i = 0; i < cards.length; i++) {
        // cards[i].style.color="#708090";
        cards[i].style.color=blackText;
        cards[i].style.background=whiteText;
    }

    var butts = document.querySelectorAll('.btn-mod');
    for(var i = 0; i < butts.length; i++) {
        butts[i].style.color=whiteText;
        butts[i].style.background=blackText;
    }

    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleProjectsDarkMode(){
    localStorage.setItem("colorMode", "dark");

    // Main background
    document.body.style.backgroundColor = darkMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = darkMainBackground;
    document.getElementById("jumbotron-projects").className = "jumbotron text-white bg-secondary";
    // My name 
    document.getElementById("topContent").style.color = darkNameColor;

    // List on the side 
       var projectItem = document.querySelectorAll('.list-group-item');
    for(var i = 0; i < projectItem.length; i++) {
        // cards[i].style.color="#708090";
        projectItem[i].style.color=darkNameColor;
        projectItem[i].style.background=altText;
    }

    var jumbo = document.querySelectorAll('.jumbotron');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=darkNameColor;
        jumbo[i].style.background=altText;
    }

    var jumbo = document.querySelectorAll('.featurette-divider');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=darkNameColor;
        jumbo[i].style.background=altText;
    }

    // // Highlights container
    // document.getElementById("highlights-main-container").style.background = altText;

    // // Highlights text
    // document.getElementById("highlights-title").style.color = darkNameColor;

    // // Card bodies 
    // var cards = document.querySelectorAll('.card-color-mod');
    // for(var i = 0; i < cards.length; i++) {
    //     // cards[i].style.color="#708090";
    //     cards[i].style.color=darkNameColor;
    //     cards[i].style.background="#6c757d";
    // }

    // var butts = document.querySelectorAll('.btn-mod');
    // for(var i = 0; i < butts.length; i++) {
    //     butts[i].style.color=whiteText;
    //     butts[i].style.background=altText;
    // }

    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleProjectsLightMode(){
    localStorage.setItem("colorMode", "light");

    // Main background
    document.body.style.backgroundColor = lightMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = lightMainBackground;

    // My name 
    document.getElementById("topContent").style.color = blackText;

    // List on the side 
       var projectItem = document.querySelectorAll('.list-group-item');
    for(var i = 0; i < projectItem.length; i++) {
        // cards[i].style.color="#708090";
        projectItem[i].style.color=blackText;
        projectItem[i].style.background=whiteText;
    }

    var jumbo = document.querySelectorAll('.jumbotron');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=blackText;
        jumbo[i].style.background=whiteText;
    }


    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleCoursesDarkMode(){
    localStorage.setItem("colorMode", "dark");

    // Main background
    document.body.style.backgroundColor = darkMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = darkMainBackground;

    // My name 
    document.getElementById("topContent").style.color = darkNameColor;

    // List on the side 
       var projectItem = document.querySelectorAll('.list-group-item');
    for(var i = 0; i < projectItem.length; i++) {
        // cards[i].style.color="#708090";
        projectItem[i].style.color=darkNameColor;
        projectItem[i].style.background=altText;
    }

    var yeet = document.querySelectorAll('.jumbotron');
    for(var i = 0; i < yeet.length; i++) {
        // cards[i].style.color="#708090";
        yeet[i].style.color=darkNameColor;
        yeet[i].style.background=altText;
    }

    var jumbo = document.querySelectorAll('.featurette');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=darkNameColor;
        jumbo[i].style.background=altText;
    }

    // // Highlights container
    // document.getElementById("highlights-main-container").style.background = altText;

    // // Highlights text
    // document.getElementById("highlights-title").style.color = darkNameColor;

    // // Card bodies 
    // var cards = document.querySelectorAll('.card-color-mod');
    // for(var i = 0; i < cards.length; i++) {
    //     // cards[i].style.color="#708090";
    //     cards[i].style.color=darkNameColor;
    //     cards[i].style.background="#6c757d";
    // }

    // var butts = document.querySelectorAll('.btn-mod');
    // for(var i = 0; i < butts.length; i++) {
    //     butts[i].style.color=whiteText;
    //     butts[i].style.background=altText;
    // }

    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleCoursesLightMode(){
    localStorage.setItem("colorMode", "light");

    // Main background
    document.body.style.backgroundColor = lightMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = lightMainBackground;

    // My name 
    document.getElementById("topContent").style.color = blackText;

    // List on the side 
       var projectItem = document.querySelectorAll('.list-group-item');
    for(var i = 0; i < projectItem.length; i++) {
        // cards[i].style.color="#708090";
        projectItem[i].style.color=blackText;
        projectItem[i].style.background=whiteText;
    }

    var jumbo = document.querySelectorAll('.jumbotron');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=blackText;
        jumbo[i].style.background=whiteText;
    }

    var jumbo = document.querySelectorAll('.featurette');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=blackText;
        jumbo[i].style.background=whiteText;
    }


    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleCreativeDarkMode(){
    localStorage.setItem("colorMode", "dark");

    // Main background
    document.body.style.backgroundColor = darkMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = darkMainBackground;

    // My name 
    document.getElementById("topContent").style.color = darkNameColor;

    // List on the side 
       var projectItem = document.querySelectorAll('.list-group-item');
    for(var i = 0; i < projectItem.length; i++) {
        // cards[i].style.color="#708090";
        projectItem[i].style.color=darkNameColor;
        projectItem[i].style.background=altText;
    }

    var yeet = document.querySelectorAll('.jumbotron');
    for(var i = 0; i < yeet.length; i++) {
        // cards[i].style.color="#708090";
        yeet[i].style.color=darkNameColor;
        yeet[i].style.background=altText;
    }

    var jumbo = document.querySelectorAll('.featurette');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=darkNameColor;
        jumbo[i].style.background=altText;
    }

    // // Highlights container
    // document.getElementById("highlights-main-container").style.background = altText;

    // // Highlights text
    // document.getElementById("highlights-title").style.color = darkNameColor;

    // // Card bodies 
    // var cards = document.querySelectorAll('.card-color-mod');
    // for(var i = 0; i < cards.length; i++) {
    //     // cards[i].style.color="#708090";
    //     cards[i].style.color=darkNameColor;
    //     cards[i].style.background="#6c757d";
    // }

    // var butts = document.querySelectorAll('.btn-mod');
    // for(var i = 0; i < butts.length; i++) {
    //     butts[i].style.color=whiteText;
    //     butts[i].style.background=altText;
    // }

    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleCreativeLightMode(){
    localStorage.setItem("colorMode", "light");

    // Main background
    document.body.style.backgroundColor = lightMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = lightMainBackground;

    // My name 
    document.getElementById("topContent").style.color = blackText;

    // List on the side 
       var projectItem = document.querySelectorAll('.list-group-item');
    for(var i = 0; i < projectItem.length; i++) {
        // cards[i].style.color="#708090";
        projectItem[i].style.color=blackText;
        projectItem[i].style.background=whiteText;
    }

    var jumbo = document.querySelectorAll('.jumbotron');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=blackText;
        jumbo[i].style.background=whiteText;
    }

    var jumbo = document.querySelectorAll('.featurette');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=blackText;
        jumbo[i].style.background=whiteText;
    }


    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleProfessionalDarkMode(){
    localStorage.setItem("colorMode", "dark");

    // Main background
    document.body.style.backgroundColor = darkMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = darkMainBackground;

    // My name 
    document.getElementById("topContent").style.color = darkNameColor;

    // List on the side 
       var projectItem = document.querySelectorAll('.list-group-item');
    for(var i = 0; i < projectItem.length; i++) {
        // cards[i].style.color="#708090";
        projectItem[i].style.color=darkNameColor;
        projectItem[i].style.background=altText;
    }

    var yeet = document.querySelectorAll('.jumbotron');
    for(var i = 0; i < yeet.length; i++) {
        // cards[i].style.color="#708090";
        yeet[i].style.color=darkNameColor;
        yeet[i].style.background=altText;
    }

    var jumbo = document.querySelectorAll('.featurette');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=darkNameColor;
        jumbo[i].style.background=altText;
    }

    // // Highlights container
    // document.getElementById("highlights-main-container").style.background = altText;

    // // Highlights text
    // document.getElementById("highlights-title").style.color = darkNameColor;

    // // Card bodies 
    // var cards = document.querySelectorAll('.card-color-mod');
    // for(var i = 0; i < cards.length; i++) {
    //     // cards[i].style.color="#708090";
    //     cards[i].style.color=darkNameColor;
    //     cards[i].style.background="#6c757d";
    // }

    // var butts = document.querySelectorAll('.btn-mod');
    // for(var i = 0; i < butts.length; i++) {
    //     butts[i].style.color=whiteText;
    //     butts[i].style.background=altText;
    // }

    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleProfessionalLightMode(){
    localStorage.setItem("colorMode", "light");

    // Main background
    document.body.style.backgroundColor = lightMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = lightMainBackground;

    // My name 
    document.getElementById("topContent").style.color = blackText;

    // List on the side 
       var projectItem = document.querySelectorAll('.list-group-item');
    for(var i = 0; i < projectItem.length; i++) {
        // cards[i].style.color="#708090";
        projectItem[i].style.color=blackText;
        projectItem[i].style.background=whiteText;
    }

    var jumbo = document.querySelectorAll('.jumbotron');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=blackText;
        jumbo[i].style.background=whiteText;
    }

    var jumbo = document.querySelectorAll('.featurette');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=blackText;
        jumbo[i].style.background=whiteText;
    }


    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleAboutDarkMode(){
    localStorage.setItem("colorMode", "dark");

    // Main background
    document.body.style.backgroundColor = darkMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = darkMainBackground;

    // My name 
    document.getElementById("topContent").style.color = darkNameColor;

    // List on the side 
       var projectItem = document.querySelectorAll('.list-group-item');
    for(var i = 0; i < projectItem.length; i++) {
        // cards[i].style.color="#708090";
        projectItem[i].style.color=darkNameColor;
        projectItem[i].style.background=altText;
    }

    var yeet = document.querySelectorAll('.jumbotron');
    for(var i = 0; i < yeet.length; i++) {
        // cards[i].style.color="#708090";
        yeet[i].style.color=darkNameColor;
        yeet[i].style.background=altText;
    }

    var jumbo = document.querySelectorAll('.featurette');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=darkNameColor;
        jumbo[i].style.background=altText;
    }

    // // Highlights container
    // document.getElementById("highlights-main-container").style.background = altText;

    // // Highlights text
    // document.getElementById("highlights-title").style.color = darkNameColor;

    // // Card bodies 
    // var cards = document.querySelectorAll('.card-color-mod');
    // for(var i = 0; i < cards.length; i++) {
    //     // cards[i].style.color="#708090";
    //     cards[i].style.color=darkNameColor;
    //     cards[i].style.background="#6c757d";
    // }

    // var butts = document.querySelectorAll('.btn-mod');
    // for(var i = 0; i < butts.length; i++) {
    //     butts[i].style.color=whiteText;
    //     butts[i].style.background=altText;
    // }

    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}

function toggleAboutLightMode(){
    localStorage.setItem("colorMode", "light");

    // Main background
    document.body.style.backgroundColor = lightMainBackground;

    // Div behind my name
    document.getElementById("topContent").style.background = lightMainBackground;

    // My name 
    document.getElementById("topContent").style.color = blackText;

    // List on the side 
       var projectItem = document.querySelectorAll('.list-group-item');
    for(var i = 0; i < projectItem.length; i++) {
        // cards[i].style.color="#708090";
        projectItem[i].style.color=blackText;
        projectItem[i].style.background=whiteText;
    }

    var jumbo = document.querySelectorAll('.jumbotron');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=blackText;
        jumbo[i].style.background=whiteText;
    }

    var jumbo = document.querySelectorAll('.featurette');
    for(var i = 0; i < jumbo.length; i++) {
        // cards[i].style.color="#708090";
        jumbo[i].style.color=blackText;
        jumbo[i].style.background=whiteText;
    }


    // Footer text
    document.getElementById("footer-text").style.color = darkNameColor;
    document.getElementById("return-to-top-link").style.color = darkNameColor;
}


function indexColorCheck(){
    if (localStorage.getItem("colorMode") == null || localStorage.getItem("colorMode") == "dark"){
        toggleIndexDarkMode();
    } else {
        toggleIndexLightMode();
    }
}

function projectsColorCheck(){
    if (localStorage.getItem("colorMode") == null || localStorage.getItem("colorMode") == "dark"){
        toggleProjectsDarkMode();
    } else {
        toggleProjectsLightMode();
    }
}

function colorCoursesCheck(){
    if (localStorage.getItem("colorMode") == null || localStorage.getItem("colorMode") == "dark"){
        toggleCoursesDarkMode();
    } else {
        toggleCoursesLightMode();
    }
}

function colorCreativeCheck(){
    if (localStorage.getItem("colorMode") == null || localStorage.getItem("colorMode") == "dark"){
        toggleCreativeDarkMode();
    } else {
        toggleCreativeLightMode();
    }
}

function colorProfessionalCheck(){
    if (localStorage.getItem("colorMode") == null || localStorage.getItem("colorMode") == "dark"){
        toggleProfessionalDarkMode();
    } else {
        toggleProfessionalLightMode();
    }
}

function colorAboutCheck(){
    if (localStorage.getItem("colorMode") == null || localStorage.getItem("colorMode") == "dark"){
        toggleAboutDarkMode();
    } else {
        toggleAboutLightMode();
    }
}



