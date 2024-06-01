// 1-masala

// function summ(arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum = sum + arg[i];
//   }

//   return sum;
// }

// alert(summ([2, 3, 5, 7, 9, 12, 21]));

// 2-masala
// function summ(arg) {
//     let max = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if(max >= arg[i]) {
//             max = max;
//         } else {
//             max = arg[i];
//         }
//     }

//     return max;
//   }

//   alert(summ([2, 3, 6, 7, 9, 12, 3]));

// 3-masala
// function summ(arg) {
//     let min = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if(min <= arg[i]) {
//             min = min;
//         } else {
//             min = arg[i];
//         }
//     }

//     return min;
//   }

//   alert(summ([2, 3, 6, 7, 9, 12, 3]));

// 4-masala
// function manfiy() {
//   let arg = [2, -3, 5, 7, -9, -12, 21];
//   for (let m = 0; m < arg.length; m++) {
//     if (arg[m] < 0) {
//       console.log(arg[m] * -1);
//     }
//   }

//   return arg;
// }

// console.log(manfiy());

// 5-masala

// function summ(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         console.log(arg[i] * 2);
//     }

//     return arg;
// }

// console.log(summ([2, 3, 5, 7, 9, 12, 21]));

// 6-masala
// function summ(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 0) {
//       arg.splice(i, 1);

//       i--;
//     }
//   }

//   return arg;
// }

// console.log(summ([2, 3, 5, 7, 9, 12, 21]));

// 7-masala
// function summ(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 1) {
//       arg.splice(i, 1);

//       i--;
//     }
//   }

//   return arg;
// }

// console.log(summ([2, 3, 5, 7, 9, 12, 21]));

// 8-masala
// function teksh() {
//     let massiv = [2,4,7,'salom', true, null];
//     if (massiv.length > 0) {
//         console.log(`${massiv}  mavjud`);
//     } else  {
//         console.log(`${massiv}  mavjud emas`);
//     }

//     return massiv;
// }

// console.log(teksh());

// 9-masala
// function tesTar(arg) {
//     for(let i = 0; i < arg.length; i++)  {
//         console.log(arg[i] * -1);
//     }

// return arg;
// }

// console.log(tesTar([1,3,-4,6,-9,-12,15]));

// 10-masala
// function katta(arg) {
//   let a = 6;

//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] < a) {
//       arg.splice(i, 1);
//       i--;
//     }
//   }

//   return arg;
// }

// console.log(katta([2, 23, -10, 3, 5, 7, 9, 12, 21]));

// 11-masala
// function plus(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         console.log(arg[i] + 1);
//     }

//     return arg;
// }

// console.log(plus([-7, -2, 2, 3, 30, 5, 7, 9, 12]));

// 12-masala
// function index(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     console.log(`${arg[i]}  indeksi  ${i}`);
//   }

// }

// console.log(index([-2, 3, 5, -7, 9, 12, -32]));

// 13-masala
// function teng(arg) {
//   let a = 5;
//   let counter = 0;
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] == a) {
//       counter = counter + 1;
//     }
//   }

//   return counter;
// }

// console.log(teng([2, 23, 5, 3, 5, 7, 9, 5, 32, 5]));

// 14-masala
// function New(arg) {
//   let newMas = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] > 0) {
//       newMas.push(arg[i]);
//     }
//   }

//     return newMas;
// }
// console.log(New([-2, 3, 5, -7, 9, 12, -32]));

// 15-masala
// function New(arg) {
//   let newMasMan = [];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] < 0) {
//       newMasMan.push(arg[i]);
//     }
//   }

//     return newMasMan;
// }
// console.log(New([-2, 3, 5, -7, 9, 12, -32]));

// 17-masala
// function kvad(arg) {
//     for(let i = 0; i < arg.length; i++) {
//         console.log(arg[i] ** 2);
//     }

//     return arg;
// }

// kvad([-7, -2, 2, 3, 30, 5, 7, 9, 12]);

// 18-masala
// function Newmass(arg) {
//   let newMas = [];
//   for (let i = 0; i < arg.length; i++) {
//     newMas.push(arg[i]);
//   }

//   return newMas;
// }
// console.log(Newmass([-2, 3, 5, -7, 9, 12, -32]));

// 19-masala
// let N = [2, 3, 6, 7, 9, 12, 3];
// function count(N) {
//   let counter = 0;
//   let summ = 0;
//   let A;
//   for (let i = 0; i < N.length; i++) {
//     counter = counter + 1;
//     summ = summ + N[i];
//   }

//   A = summ / counter;

//   return A;
// }

// console.log(count(N));

// 20-masala
// ishlolmadim


// Qo'shimcha
// 1-masala
// let N = [
//   1,
//   12,
//   24,
//   1 + 5,
//   "Ahrorbek",
//   "salom",
//   "Ahmadjon",
//   true,
//   null,
//   undefined,
// ];

// // console.log(N[N.length - 5]);

// 2-masala
// for (let i = 0; i < N.length; i++) {
//   console.log(N[i]);
// }

// function son(n) {
//     let S = 1;

//     for (let i= 0; i < n.length; i++) {
//         if(n[i] % 2 == 1) {
//             S = S * n[i]
//         }
//     }

//     return S;
// }

// console.log(son([2, 3, 5, 7, 8]));

// 3-masala
// let N = [12,23,24,55,87,9];

// function count(N) {
//     let counter = 0;
//     for (let i = 0; i < N.length; i++) {
//         if (N[i] % 3 == 0 && N[i] % 2 == 0) {
//             counter = counter + 1;
//         }
//     }

//     return counter;
// }

// console.log(count[N]);

// 4-masala
// Dastlabki n ta sondan tashkil topgan massiv yasalsin;
// function creatMas() {
//   let n = +prompt("n soni kiritilsin");
//   let mass = [];
//   for (let i = 1; i <= n; i++) {
//     mass.push(i);
//   }

//   return mass;
// }

// console.log(creatMas());

// 5-masala
// Dastlabki n ta toq sondan iborat massiv yasash
// function creatMas() {
//     let n = +prompt("n soni kiritilsin");
//     let mass = [];
//     for (let i = 1; i <= n * 2; i += 2) {
//       mass.push(i);
//     }

//     return mass;
//   }

//   console.log(creatMas());

// 6-masala
// Dastlabki n ta juft sondan iborat massiv
// function creatMas() {
//     let n = +prompt("n soni kiritilsin");
//     let mass = [];
//     for (let i = 2; i <= n * 2; i += 2) {
//       mass.push(i);
//     }
  
//     return mass;
//   }
  
//   console.log(creatMas());