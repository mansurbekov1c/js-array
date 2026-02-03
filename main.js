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

let nums = [1, 2, 3, 4, 5, 6];

let filtered = nums.filter((n) => n % 2 == 0);
let dubled = filtered.map((n) => n * 2);

console.log(dubled);
