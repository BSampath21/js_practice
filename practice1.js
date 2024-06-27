function myfun() {
  event.preventDefault();
  let x = document.getElementById("num").value;
  let text;
  if (x >= 1 && x <= 2898) {
    text = "OK";
  } else {
    text = "invalid";
  }

  document.getElementById("demo").innerHTML = text + " Entered number is " + x;
}
