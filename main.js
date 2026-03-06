const button = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");

button.addEventListener("click", () => {

  // remove a trava das animações
  document.body.classList.remove("not-loaded");

  // esconde a tela inicial
  startScreen.style.display = "none";

});