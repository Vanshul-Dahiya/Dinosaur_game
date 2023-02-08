document.onkeydown = function (e) {
  console.log("-> ", e.keyCode);
  if (e.keyCode == 38) {
    console.log("if ", e.keyCode);
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      console.log("timeout ", e.keyCode);
      dino.classList.remove("animateDino");
    }, 600);
  }
};
