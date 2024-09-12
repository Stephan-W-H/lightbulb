var mainDiv = document.getElementById("lysPære");  
var lysPå= false;

function turnOnlight() {
    if (lysPå) {
        //Hvis lyset er på gult bytt til grått med false;
        mainDiv.style.backgroundColor = "yellow";
        lysPå =false; //Skrur lyset av med false;
    } else {
        //Hvis lyset er grått bytt til til gult med true;
        mainDiv.style.backgroundColor = "grey";
        lysPå =true; //Skrur lyset på med true;
    } 
        
}



    
    