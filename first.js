/*const product = {
  name: "Parker",
  rating: 4,
  offer: 5,
  price: 500,
};

console.log(product); */

//Arithmetic operators

/*let a = 100,
  b = 25;
console.log("a + b =", a + b);
console.log("a - b =", a - b);*/

//comparison operators

/*let a = 50;
let b = "25";
console.log(a !== b);*/

/*let mode = "silver";
let color;

if (mode == "dark") {
  color = "black";
} else if (mode == "red") {
  color = "red";
} else if (mode == "blue") {
  color = "blue";
} else {
  color = "white";
}
console.log(color);*/

//multiple of 5
/*let a = prompt("Enter a number");
if (a % 5 == 0) {
  console.log(a, " is a multiple of 5");
} else {
  console.log(a, "is not a multiple of 5");
}*/

/*let number = 21;
let userNum = prompt("Guess the number");
while (userNum != number) {
  userNum = prompt("You entered wrong number.Guess again");
}
console.log("Entered correct number");*/

//Template Literals

/*let student = {
  name: "Thomas Shelby",
  company: "Shelby",
  series: "peakyblinders",
  year: 1925,
};

let output = `the series ${student.series} starring ${student.name} aired in ${student.year}`;
console.log(output);*/

/*let name = prompt("Enter full name");
userName = "@" + name + name.length;
console.log(userName);*/

//ARRAYS

/*let marks = [78, 89, 45, 36, 46];
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}*/

/*let heroes = ["ragnar", "shelby", "homelander", "spiderman", "batman"];

for (let x of heroes) {
  console.log(x + " ");
}*/

/*let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
let total = marks.length;

for (let x of marks) {
  sum = sum + x;
}
let avg = sum / total;
console.log(avg);*/

/*let heroes = ["antman", "thor", "spiderman", "ironman", "hulk"];
console.log(heroes.slice(1));

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.splice(2, 2, 101, 102);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "Netflix"];

companies.push("Amazon");
console.log(companies.length);*/

/*function fun(a, b) {
  s = a + b;
  return s;
}

let val = fun(10, 20);
console.log(val);

const arrowMul = (a, b) => {
  console.log(a * b);
};
arrowMul(5, 3);*/

/*function sub(a, b) {
  console.log(a + b);
}
function calculator(a, b, subCallBack) {
  subCallBack(a, b);
}

calculator(2, 3, sub);*/

/*function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});*/

/*let promise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    let success = true;
    if (success) {
      myResolve("Dta successfull");
    } else {
      myReject("error");
    }
  }, 2000);
});

promise.then(
  function (value) {
    console.log("success ", value);
  },
  function (error) {
    console.log("Error:", error);
  }
);*/

/*const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("this is the data"), 2000);
});

promise.then((res) => {
  console.log(res);
});*/

//fetch => fetxh(url,{options})

/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    if (!response.ok) {
      throw new Error("could not fetch");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));*/

//async,await

fetchData();
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemon").value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch");
    }
    const data = await response.json();
    //console.log(data);
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemon-img");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
