//mouse CLick
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll("button.drum")[i].addEventListener("click", function() {

    var clickHTML = this.innerHTML;
    // console.log(this);
    Sound(clickHTML);

    buttonAnimation(clickHTML);

  });
}

//keyboard Press
document.addEventListener("keydown", function(event){

  var clickButton = event.key;

  Sound(clickButton);

  buttonAnimation(clickButton);
});

function Sound (button) {
  switch (button) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var kick = new Audio('sounds/crash.mp3');
      kick.play();
      break;

    case "l":
      var crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break;

    default:
    console.log(button);

  }
}

function buttonAnimation(keyPressed){
  var activeKey = document.querySelector("."+ keyPressed);
  activeKey.classList.add("pressed");

  setTimeout(function(){
    activeKey.classList.remove("pressed");
  },100);

}
