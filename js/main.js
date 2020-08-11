localStorage.setItem("true", darkMode);

$( document ).ready(function() {
    console.log(darkMode);
});

function colorToggle() {
    darkMode = !darkMode; 
    console.log("darkMode changed to: " + darkMode);
}