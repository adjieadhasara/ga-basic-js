/*
  - Operator Aritmatika
  - Operator Assignment
  - Operator Logika
  - Operator Perbandingan
*/

// OPERATOR ARITMATIKA
console.log("=== ARITMATIKA ===")
let a = 6;
let b = 2;

// Penambahan String
// Contatination
console.log("hello + world = ", "hello" + "world")

// Penambahan
console.log("a + b = ", a + b )

// Pengurangan
console.log("a - b = ", a - b )

// Perkalian
console.log("a / b = ", a / b )

// Pembagian
console.log("a * b = ", a * b )

// Modulus
console.log("a % b = ", a % b )

// Increment
// a++ = a + 1
a++
console.log("a++ = ", a)

// Decrement
// b-- = b - 1
b--
console.log("b-- = ", b)

// OPERATOR ASSIGNMENT
// =, +=, -=, *=, /=
console.log("=== ASSIGNMENT ===")

let umur = 25
console.log("Umur sebelum: ", umur)

umur += 2 // umur = umur + 2
console.log("Umur sesudah: ", umur)

// OPERATOR LOGIKA
// -> operator logika akan selalu menghasilkan Boolean
// AND (&&)
// OR (||)
// NOT (!)

console.log("=== LOGIKA ===")

let kulitHitam = false;
let seringKePantai = false;

console.log(kulitHitam + " && " + seringKePantai + " = ", kulitHitam && seringKePantai )
console.log(kulitHitam + " || " + seringKePantai + " = ", kulitHitam || seringKePantai )
console.log("!"+kulitHitam+ " = ", !kulitHitam)

// OPERATOR PERBANDINGAN
// -> operator perbandingan akan selalu menghasilkan Boolean
// ==, ===, >, <, >=, <=, !=, !==

console.log("=== PERBANDINGAN ===")

let x = 30;
let y = 30;

console.log(`${x} == ${y} ->`, x == y)
console.log(`${x} === ${y} ->`, x === y)
console.log(`${x} > ${y} ->`, x > y)
console.log(`${x} >= ${y} ->`, x >= y)
console.log(`${x} < ${y} ->`, x < y)
console.log(`${x} <= ${y} ->`, x <= y)
console.log(`${x} != ${y} ->`, x != y)
console.log(`${x} !== ${y} ->`, x !== y)


