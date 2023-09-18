let answerValue = 0;

function buttonClicked(buttonID) {
  if (buttonID === 1) {
    let username = prompt("What is your name?");

    if (username.length > 16) {
      alert("Whoops! That name is too long! Try again.");
      buttonClicked(1);
    } else if (username == "Liam") {
      document.getElementById("name").innerHTML = "Hello, " + username + " have a great day!";
      answerValue = 100;
    } else {
      document.getElementById("name").innerHTML = "Hello, " + username + " have a great day!";
    }
    document.getElementById("points").innerHTML = answerValue + " / 3";
  }
  if (buttonID === 2) {
    let favColour = prompt("What is your favourite colour?");

    if (favColour == "blue" || favColour == "Blue") {
      document.getElementById("favColour").innerHTML = favColour + " is a nice colour!";
      answerValue++;
    } else {
      document.getElementById("favColour").innerHTML = favColour + " is a nice colour!";
      if (answerValue >= 3) {
        answerValue = 2;
      }
    }
    document.getElementById("points").innerHTML = answerValue + " / 3";
  }
  if (buttonID === 3) {
    let likeTea = prompt("Do you like tea?");

    if (likeTea == "No" || likeTea == "no") {
      document.getElementById("likeTea").innerHTML = "You don't like Tea? Are you sure you're British?";
      if (answerValue >= 3) {
        answerValue = 2;
      }
    } else if (likeTea == "Yes" || likeTea == "yes") {
      document.getElementById("likeTea").innerHTML = "Very good. Tea is nice";
      answerValue++;
    } else {
      alert("Please enter Yes or No!");
      buttonClicked(3);
    }
    document.getElementById("points").innerHTML = answerValue + " / 3";
  }
  if (buttonID === 4) {
    let drinkWater = prompt("Do you drink water");

    if (drinkWater == "No" || drinkWater == "no") {
      document.getElementById("drinkWater").innerHTML = "Well. You really should, it is good for you! Try spring water, not tap though...";
      if (answerValue >= 3) {
        answerValue = 2;
      }
    } else if (drinkWater == "Yes" || drinkWater == "yes") {
      document.getElementById("drinkWater").innerHTML = "That's great! You must be really healthy.";
      answerValue++;
    } else {
      alert("Please answer, yes or no!");
      buttonClicked(4);
    }
    document.getElementById("points").innerHTML = answerValue + " / 3";
  }

  console.log(answerValue);
  if (answerValue >= 3) {
    document.getElementById("hiddenButton").style.display = "flex";
  } else {
    document.getElementById("hiddenButton").style.display = "none";
  }
}

function secret() {
  alert("You PASSED! Well Done");
}
