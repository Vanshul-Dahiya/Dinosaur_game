score = 0;
cross = true;

audioGameOver = new Audio("gameOver.mp3");
music = new Audio("music.mp3");

setTimeout(() => {
  music.play();
}, 1000);

document.onkeydown = function (e) {
  // player/dinosaur movement
  if (e.keyCode == 38) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 600);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};

// check collision of dinosaur and obstacle
setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");

  // get dino left,bottom and obstacle left value
  dinoX = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue("left")
  );
  dinoY = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue("bottom")
  );
  obstacleX = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  obstacleY = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("bottom")
  );

  offsetX = Math.abs(dinoX - obstacleX);
  offsetY = Math.abs(dinoY - obstacleY);

  console.log(offsetX, offsetY);

  if (offsetX < 73 && offsetY < 52) {
    gameOver.innerHTML = "Reload to play again!";
    obstacle.classList.remove("obstacleAni");
    audioGameOver.play();
    setTimeout(() => {
      audioGameOver.pause();
      music.pause();
    }, 1000);
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      animationDuration = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newDuration = animationDuration - 0.1;
      obstacle.style.animationDuration = newDuration + "s";
    }, 500);
  }
}, 10);

function updateScore(score) {
  scoreCount.innerHTML = `Your score : ${score}`;
}
