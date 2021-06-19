let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

const diceRoll = () => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 =Math.floor(Math.random() * 6) + 1;

        document.getElementById("image1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); 

        document.getElementById("image2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

        if (randomNumber1 == randomNumber2){
            document.getElementById("refresh").innerHTML ="Draw";
         } 
        else if (randomNumber1 < randomNumber2){
            document.getElementById("refresh").innerHTML = "Player 2 Wins";

        }

        else{
            document.getElementById("refresh").innerHTML = "Player 1 Wins";
        }

    }

