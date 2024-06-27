let modeBtn = document.querySelector("#btn");
let mode = "light";

modeBtn.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
  } else {
    mode = "light";
  }
  console.log(mode);
});
