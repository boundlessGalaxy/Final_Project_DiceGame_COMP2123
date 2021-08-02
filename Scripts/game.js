var player1 = "Player 1";
var player2 = "Player 2";

// document.querySelector('.butn').addEventListener('click', init);



function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1")
                    .innerHTML = player1;
                      
    document.querySelector("p.Player2")
                    .innerHTML = player2;
}

function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
        "Final_Project_COMP2132/images/dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
        "Final_Project_COMP2132/images/dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML
                            = (player2 + " WINS!");


        }

        else {
            document.querySelector("h1").innerHTML
                            = (player1 + " WINS!");
        }
        

if(randomNumber1 < randomNumber2){
    document.querySelector("#current-2").innerHTML
    = (randomNumber2);
}
if(randomNumber1 > randomNumber2){
    document.querySelector("#current-1").innerHTML
    = (randomNumber1);
}


    }, 2500);



  }

//Animation Style 


  const text = document.querySelector(".title");
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";
  
  
  for(let i = 0; i< splitText.length; i++){
      text.innerHTML += "<span>" +splitText[i] +"</span>";
  }
  
  let char = 0;
  let timer = setInterval(onTick, 50); 
  
  function onTick(){
      const span = text.querySelectorAll('span')[char];
      span.classList.add('fade');
      char++
      if(char === splitText.length){
          complete();
          return;
      }
  
  }
  
  function complete(){
      clearInterval(timer);
      timer = null;
  }
  