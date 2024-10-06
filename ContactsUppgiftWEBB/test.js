
function colorChange (){

    var HEJ = document.getElementById("Button2");

    HEJ.style.backgroundColor = "red";

}

function buttonSize (){

    var DÅ = document.getElementById("Button1");

    DÅ.style.transform = "scale(1.5)";
    DÅ.innerHTML = "HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO";

}


function chatButton (){

    var chat1 = document.getElementById("chatText1");

    var newElement = document.createElement("div");

    chat1.appendChild(newElement);

    var userInputFName = document.getElementById("userText1").value;
    
    var userInputLName= document.getElementById("userText2").value;

    var userInputNumber = document.getElementById("userText3").value;

    newElement.innerHTML = userInputFName + " " + userInputLName + " " + userInputNumber;

    var deleteButton = document.createElement("div");

    newElement.appendChild(deleteButton);

    deleteButton.style.backgroundColor = "red"
    deleteButton.style.height = "auto"
    deleteButton.style.width = "auto"
    deleteButton.style.cursor = "pointer"; // Make the button look clickable

    deleteButton.innerHTML = "Delete this contact"

    deleteButton.addEventListener("click", function(){

        newElement.remove();

    });

    newElement.style.backgroundColor = "lightblue";
    newElement.style.height = "auto";
    newElement.style.width = "auto";
    newElement.style.border = "5px solid black";
    newElement.style.alignItems = "center"; 
    
    
}