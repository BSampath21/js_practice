function fun() {
  let text;
  let p = prompt("Enter name ", "harry");
  if (p == null || p == "") {
    text = "user cancelled";
  } else {
    text = "Hello " + p;
  }
  document.getElementById("demo").innerHTML = text;
}
