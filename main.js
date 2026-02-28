// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((sum, n) => sum + n, 0); // barcha elementni bitta qiymatga kamaytirish uchun

// numbers.pop(); // oxiridan element olib tashlaydi
// numbers.push(10); // oxiriga element qo'shadi

// numbers.shift(); // boshidan element olib tashlaydi
// numbers.unshift(0); // boshiga element qo'shadi

// let dubled = numbers.map((n) => n * 2); //har bir elementning ustida amal bajarib yangi array qaytarish mumkin

// let filtered = numbers.filter((n) => n % 2 === 0); // shartga mos keladigan elementlarni yangi arrayga olish uchun

// console.log(numbers);
// console.log(filtered);
// console.log(sum);

// let arr = [-3, 4, -2, 7, 1];

// let filtered = arr.filter((n) => n >= 0);
// let sum = filtered.reduce((sum, n) => sum + n, 0);

// console.log(sum);

// let nums = [1, 2, 3, 4, 5, 6];

// let filtered = nums.filter((n) => n % 2 == 0);
// let dubled = filtered.map((n) => n * 2);

// console.log(dubled);

// let numbers = [1, 2, 3, 4, 5, 2, 6, 1, 3, 2];
// let toqlar = [1, 3, 5, 7, 8, 11, 13];

// let finder = numbers.find((n) => n === 2);
// let even = numbers.some((n) => n % 2 === 0);
// let odd = toqlar.every((n) => n % 2 === 1);

// let filter = numbers.filter((n) => n % 2 === 1);

// console.log(finder);
// console.log(even);
// console.log(filter.length);
// console.log(odd);

// let names = [
//   "alisher",
//   "gulirano",
//   "madina",
//   "sevinchoy",
//   "kamron",
//   "ilyos",
//   "alobek",
//   "jorabek",
// ];

// let sorted = names.sort();
// console.log(sorted);

// let sonlar = [1, 32, 15, 7, 81, 11, 213];

// let osish = sonlar.sort((a, b) => a - b);
// let kamayish = sonlar.sort((a, b) => b - a);

// console.log(kamayish);

// sonlar.forEach((val, i) => {
//   console.log(val, i);
// });

// 1
// let names = ["Ali", "Sardor", "John", "Vali", "Muhammad"];

// let filtered = names.filter((n) => 5 <= n.length);
// let tartib = filtered.sort((a, b) => a - b);

// console.log(tartib);

// 2

// let nums = [5, 12, 7, 20];

// let tekshir = nums.some((n) => n > 10);
// if (tekshir) {
//   let filtered = nums.filter((n) => n > 10);
//   let tartib = filtered.sort((a, b) => a - b);
//   console.log(tartib);
// } else {
//   console.log("10 dan katta son yo'q");
// }

// 3
// let names = ["Ali", "Siroj", "Lola", "Samar"];

// let filtered = names.filter((n) => 4 < n.length);
// let ozgar = filtered.map((n) => "Hello " + n);

// console.log(ozgar);

// 4
// let nums = [-2, 1, 3, -5, 4];

// let uchlangan = nums.map((n) => n * 3);
// let filtered = uchlangan.filter((n) => n >= 0);

// console.log(filtered);

// 5
// let arr = [0, 4, 0, 6, 10];

// let filtered = arr.filter((n) => n !== 0);
// let yigindi = filtered.reduce((orta, n) => orta + n, 0);

// let orta = yigindi / filtered.length;

// console.log(orta);

// let fruits = ["apple", "banana", "orange"];

// console.log(fruits.includes("banana"));
// console.log(fruits.includes("grape"));

// let numbers = [10, 20, 30, 40, 50, 60, 70];

// console.log(numbers.indexOf(30));
// console.log(numbers.lastIndexOf(30));

// let part = numbers.slice(1, 5);

// let part2 = numbers.splice(1, 4, 0, 43212, 343535434, 5544645, 894894398);
// console.log(part2);
// console.log(numbers);

// 1
// let nums = [0, 3, 0, 4, 5, 0, 7];

// let filtered = nums.filter((n) => n !== 0);
// let natija = filtered.toReversed();

// console.log(natija);

// 2
// let nums = [0, 3, 0, 4, 5, 0, 7, -10];

// let filtered = nums.filter((n) => n > 0);
// let yigindi = filtered.reduce((son, n) => son + n);

// console.log(yigindi);

// 3
// let nums = [2, 5, 6, 8, 1];

// let filtered = nums.filter((n) => n > 5);
// let kv = filtered.map((n) => n ** 2);

// console.log(kv);

// 4
// let nums = [2, 5, 6, 8, 1];

// let sorted = nums.sort((a, b) => b - a);
// let natija = sorted.slice(0, 2);

// console.log(natija);

// 5
// let arr = [31, 32, 32, 33, 33, 33, 34, 35];

// let unique = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });
// console.log(unique);

// 6
// let nums = [1, 2, 2, 3, 3, 3, 4];

// let filtered = nums.filter((n) => nums.indexOf(n) % 2 === 1);
// let dubled = filtered.map((n) => n * 2);

// console.log(dubled);

// 7
// let arr = [5, 6, 7];

// let result = [].concat(...arr.map((num) => [0, num]));

// console.log(result);

// 8
// let nums = [-5, 6, 7];
// let musbat = ["musbat"];
// let manfiy = ["manfiy"];

// let filtered1 = nums.filter((n) => n > 0);
// let filtered2 = nums.filter((n) => n < 0);

// let natija1 = [...musbat, ...filtered1];
// let natija2 = [...manfiy, ...filtered2];

// console.log(natija1);
// console.log(natija2);

// 9
// let nums = [1, 2, 3, 4];

// let first = nums.shift();
// nums.push(first);

// console.log(nums);

// 10
// let nums = [8, 90, 1, 2, 3, 4];

// let sorted = nums.toSorted();
// let qirq = sorted.splice(0, 1);

// console.log(sorted);

// let users = {
//   fName: "Madina",
//   age: 16,
//   isStudent: true,
//   "full name": "Madina Qalandarova",
// };

// console.log(users.fName);
// console.log(users.age);
// console.log(users.isStudent);
// console.log(users["full name"]);

// let user = {
//   fName: "Madina",
//   age: 16,
//   isStudent: true,
//   "full name": "Madina Qalandarova",
// };

// let user2 = { ...user };

// let user3 = JSON.parse(JSON.stringify(user));

// user.country = "uzbekistan";

// // console.log(user);
// // console.log(user2);
// console.log(user3);

// let user = {
//   fName: "Ali",
//   age: 22,

//   greet() {
//     console.log("Hello " + this.fName);
//   },
// };

// user.isActive = true;

// console.log(user);
// user.greet();

// let user = {
//   fName: "Madina",
//   age: 16,
//   isStudent: true,
//   address: {
//     city: "Tashkent",
//     zip: 221100,
//   },

//   greet() {
//     console.log("Hello" + this.fName);
//   },
// };

// let {
//   address: { city, zip },
// } = user;

// let a = { name: "alisher" };
// let b = { name: "satimov" };

// let fullName = { ...a, ...b };

// let updateUser = {
//   ...fullName,
//   name: "azamat",
// };

// console.log(updateUser);

// console.log(Object.entries(updateUser));

// let user = {
//   name: "Alisher",
//   age: 20,
// };

// for (let kalit in user) {
//   console.log(kalit, user[kalit]);
// }

// 1
// let user = {
//   name: "Ali",
//   age: 22,
// };
// user.isActive = true;
// console.log(user);

//  2
// let product = {
//   title: "Book",
//   price: 15,
// };

// product.price = 20;
// console.log(product);

// // 3
// let person = {
//   fName: "Dilshod",
//   age: 30,
// };

// delete person.age;

// let { fName, age = 18 } = person;

// console.log(fName);
// console.log(age);

// 4
// let car = {
//   brand: "BMW",
//   model: "X5",
//   getFullName() {
//     console.log(this.brand + " " + this.model);
//   },
// };

// car.getFullName();

// 5
// let user = {
//   name: "Sam",
//   address: {
//     city: "Tashkent",
//     zip: 100100,
//   },
// };

// console.log(user.address);

// 6
// let info = {
//   address: {
//     city: "Samarqand",
//   },
// };

// let { address } = info;
// console.log(address);

// 7
// let account = {
//   balance: 100,
//   addBalance(amount) {
//     return (this.balance = this.balance + amount);
//   },
// };
// account.addBalance(10);

// console.log(account.balance);

// 8
// let student = {
//   name: "Karim",
//   contact: {
//     email: "k@gmail.com",
//     phone: "999",
//   },
// };

// student.grade = "A";

// console.log(student.contact.email);

// 9
// let user = {
//   firstName: "Bek",
//   years: 27,
// };

// let { firstName: fName, years: age } = user;

// console.log(fName, age);

// 10
// let student = {
//   name: "Diyor",
//   scores: {
//     math: 90,
//     english: 70,
//   },
//   getAverage() {
//     return (this.scores.math + this.scores.english) / 2;
//   },
// };

// console.log(student.getAverage());

// let tagName = document.querySelector("p");
// let buAydi = document.querySelector("#buAydi");
// let buClass = document.querySelector(".buClass");

// console.log(buClass);

// let matn = document.querySelector(".matn");
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   matn.textContent = "alik dunyodan";
//   // matn.innerHTML = "<i>alik dunyodan</i>";

//   matn.style.color = "red";
//   matn.style.background = "yellow";
// });

// let matn = document.querySelector(".matn");
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   // matn.classList.add("stil")
//   matn.classList.remove("active");

//   matn.classList.toggle("stil");
//   console.log(matn);
// });

// let btn = document.querySelector(".btn");
// let card = document.querySelector(".card");

// let yangiMatn = document.createElement("h1");

// yangiMatn.textContent = "Hello World";
// yangiMatn.classList.add("stil");

// btn.addEventListener("click", () => {
//   card.appendChild(yangiMatn);
//   console.log(card);
// });

// btn.addEventListener("dblclick", () => {
//   yangiMatn.remove();
//   console.log(card);
// });

// let card = document.querySelector(".card");

// card.addEventListener("mouseover", () => {
//   console.log("mouseover");
// });

// card.addEventListener("mouseout", () => {
//   console.log("mouseout");
// });

// card.addEventListener("mousedown", () => {
//   console.log("mousedown");
// });

// card.addEventListener("mouseup", () => {
//   console.log("mouseup");
// });

// card.addEventListener("mousemove", () => {
//   console.log("mousemove");
// });
// let btn = document.querySelector(".btn");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", () => {
//   let yangiLi = document.createElement("li");
//   yangiLi.textContent = "yangi element";
//   ul.appendChild(yangiLi);
// });

// homework 1
// let text = document.querySelector("#text");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   text.textContent = "ana kuydiii";
// });

// homework 2
// let box = document.querySelector(".box");
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   box.classList.toggle("style");
// });

// homework 3
// let box = document.querySelector(".sir");
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   box.classList.toggle("sir");
// });

// let li = document.querySelectorAll("#list li");
// let btn = document.querySelector(".btn");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", () => {
//   let yangiLi = document.createElement("li");
//   yangiLi.textContent = "yangi element";
//   ul.appendChild(yangiLi);
//   yangiLi.addEventListener("click", () => {
//     yangiLi.classList.toggle("chop");
//   });
// });

// li.forEach((e) => {
//   e.addEventListener("click", () => {
//     e.remove();
//   });
// });

// let ul = document.querySelector("#list");
// let btn = document.querySelector(".btn");

// function addElem(count) {
//   let li = document.createElement("li");
//   li.textContent = `yangi element ${count}`;
//   ul.appendChild(li);
// }

// function remElem() {
//   let listlar = document.querySelectorAll("#list li");
//   listlar.forEach((e) => {
//     e.addEventListener("click", () => {
//       e.remove();
//     });
//   });
// }

// let count = 0;
// btn.addEventListener("click", () => {
//   count++;
//   addElem(count);
//   remElem();
// });

// window.addEventListener("keydown", (e) => {
//   if (e.key === "g" && e.altKey) {
//     document.body.style.background = "green";
//   }
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "F5") {
//     e.preventDefault();
//     console.log(e.key);
//   }
// });

// let btn = document.querySelector(".btn");

// function handleClick() {
//   console.log("bosildi");
// }

// btn.addEventListener("click", handleClick);
// btn.removeEventListener("click", handleClick);

// let btn = document.querySelector("btn");

// let timeout = setTimeout(() => {
//   console.log("Hello World");
// }, 3000);

// btn.addEventListener("click", () => {
//   clearTimeout(timeout);
// });

// zo'r narsa:
// setInterval(() => {
//   console.log("ishladiii");
//   // window.location.reload();
// }, 1000);

// localStorage.setItem("name", "Madina");
// localStorage.removeItem("name");

// console.log(localStorage.getItem("name"));

// let son = +localStorage.getItem("son");

// console.log(typeof son);

sessionStorage.setItem("token", "12345678");

let token = sessionStorage.getItem("token");
console.log(token);
