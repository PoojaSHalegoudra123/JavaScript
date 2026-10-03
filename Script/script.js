//to print 
// console.log("Hello, World!");
//variables-----------------
// let a=10;
// console.log(a);
// var b=20;
// console.log(b);
// const c=20;
// console.log(c);
//Data types-------------------------
// let num=100;
// console.log(num);
// console.log(typeof num);

// let first;
// console.log(first);
// console.log(typeof first);

// let sec=true;
// console.log(sec);
// console.log(typeof sec);

// let third=null;
// console.log(third);
// console.log(typeof third);

// let arr=[1,2,3,4,5];
// console.log(arr);
// console.log(typeof arr);

//Type conversion----------------
// let a=5;
// let b="10";
// console.log(a+b);
// console.log(typeof (a+b));

// let c=Number(b);
// console.log(a+c);
// console.log(typeof (a+c));

// let d=String(a);
// console.log(d);
// console.log(typeof d);

//Operaters-----------------------
//1.Arithmetic operators

let a=10;
let b=5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//2.Assignment operators
let c=10;
c+=5;
console.log(c);

c-=5;
console.log(c);

c*=5;
console.log(c);

c/=5;
console.log(c);

c%=5;
console.log(c);

//3.Comparison operators
let d=10;
let e=20;

console.log(d==e);
console.log(d!=e);
console.log(d>e);
console.log(d<e);
console.log(d===e);

//4.Logical operators
let f =true;
let r =false;
console.log(f&&r);
console.log(f||r);
console.log(!f);
console.log(!r);

//5.Conditional operators
let age=18;
let result=age>=18?"You are eligible to vote":"You are not eligible to vote";
console.log(result);

//6.Bitwise operators
let x=5; //0101
let y=3; //0011

console.log(x&y); //0001 => 1
console.log(x|y); //0111 => 7
console.log(x^y); //0110 => 6
console.log(~x);  //1010 => -6
console.log(x<<1); //1010 => 10
console.log(x>>1); //0010 => 2
