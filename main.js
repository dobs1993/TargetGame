// Stopping the bullet in motion

// Bullet selected
const bullet = document.querySelector(".bullet");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const aimer = document.querySelector(".aimer");
const redTarget = document.getElementsByClassName('.remove');

// Stopping the bullet
window.addEventListener("keydown", stop);

// Moving the bullet across the screen

start.addEventListener('click', function(){
    bullet.style.animation = "move 8s infinite"
})

// Stopping the bullet on the aimer and making targets come up and previous buttons and images disappear 

stop.addEventListener('click', function(){
    bullet.style.animationPlayState = "paused";
    aimer.classList.toggle("remove");
    start.classList.toggle("remove");
    stop.classList.toggle("remove");
    bullet.classList.toggle("remove");
    redTarget.classList.toggle("remove");
});



// function Init(){
//     spaceW = screen.height - picture.height;
//     spaceH = screen.width - picture.width;

//     setInterval(moveIt, 500);
// }

// function moveIt(){
//     redTarget.style.top = Math.round(Math.random() * spaceW + 200);
//     redTarget.style.left = Math.round(Math.random() * spaceH + 12000);
// }