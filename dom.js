/*const person = {
  fullName: "kalki",
  age: 21,
  year: 2898,
  name: function () {
    return this.year + "and " + this.age;
  },
};
let val = person.name();
console.log(val);*/

/*function Person(first, last, age, pow) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.pow = pow;
}

const hero = new Person("Naruto", "Uzumaki", 17, 100);
const sensei = new Person("Kakashi", "Hatake", 25, 100);

console.log("My name is " + hero.firstName + " my power is " + hero.pow);*/

/*let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

let box = document.querySelector("#box");
box.onmouseover = () => {
  console.log("hovering");
};*/

/*let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
  } else {
    currMode = "light";
  }

  console.log(currMode);
});*/

const element = document.getElementsByTagName("p");
console.dir(element);
