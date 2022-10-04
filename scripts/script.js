const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const welcome_name = document.getElementById("welcome");
// var firstname = prompt("Your name?")
// if (firstname != null) {
//     document.getElementById("welcome").innerHTML =
//     "Welcome: " + firstname;
//   }
document.addEventListener("keydown", function(event){
    jump();
});

function jump(){
    if (dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 300)
}

let asAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 90 && cactusLeft > 0 && dinoTop >= 210){
        alert("GAME OVER :(")
    }
}, 10)