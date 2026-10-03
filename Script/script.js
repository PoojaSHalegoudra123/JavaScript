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

// let a=10;
// let b=5;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// //2.Assignment operators
// let c=10;
// c+=5;
// console.log(c);

// c-=5;
// console.log(c);

// c*=5;
// console.log(c);

// c/=5;
// console.log(c);

// c%=5;
// console.log(c);

// //3.Comparison operators
// let d=10;
// let e=20;

// console.log(d==e);
// console.log(d!=e);
// console.log(d>e);
// console.log(d<e);
// console.log(d===e);

// //4.Logical operators
// let f =true;
// let r =false;
// console.log(f&&r);
// console.log(f||r);
// console.log(!f);
// console.log(!r);

// //5.Conditional operators
// let age=18;
// let result=age>=18?"You are eligible to vote":"You are not eligible to vote";
// console.log(result);

// //6.Bitwise operators
// let x=5; //0101
// let y=3; //0011

// console.log(x&y); //0001 => 1
// console.log(x|y); //0111 => 7
// console.log(x^y); //0110 => 6
// console.log(~x);  //1010 => -6
// console.log(x<<1); //1010 => 10
// console.log(x>>1); //0010 => 2

//conditional statements--------------------
//if
// let salary=10000;
// if(salary>10000){
//     console.log("buy bike");}
//     else{
//         console.log("buy cycle");
//     }

//else if
// let salary=10000;
// if(salary>10000){
//     console.log("buy bike");}
//     else if(salary==10000){
//         console.log("buy cycle");
//     }else if(salary<=1000){
//         console.log("buy something")
//     }

// nested if
// let salary=10000;
// let emi=100;
// if(salary==10000){
//     if(emi==100){
//         console.log("buy cycle");
//     }
//     else{
//         console.log("select your EMI");
//     }
// }
//Functions---------------------
// function displayName(name)
// {
//     console.log(name);

// } displayName("poo");
// displayName("nivvi");

//return

// function displayName(name,age)
// {
//     console.log(name,age);
//     if(age>18){
//         return "Elegeble for voting";
//     }else{
//         return "go watch pogo"
//     }
//     }
//     let a=displayName(" poo",22);
//     let b=displayName(" pooj",26);
//     let c=displayName(" pooja",7);
//     console.log(a);
//     console.log(b);
//     console.log(c);


// function returnOne(one){
//     if(one==1){
//         return 1;
//     }else{
//         return returnOne(one-1);

//     }
// }
// let a=returnOne(10);
// console.log(a);

// function fact(num){
//     if(num<=1){
//         return 1;
//     }else{
//         return num*fact(num-1)
//     }
// }

// let a= fact(5);
// console.log(a);

//Arrays--------------------------

//let marks=[89,90,86,87];
// let names=["pooja","nivvi","pooj"];
// console.log(marks);
// console.log(names);

// let arr= new Array(5,4,3,2,1);
// console.log(arr[2]);

//using for loop
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// };

// marks.forEach(function(marks){
//     console.log(marks);
// });

// let fruits=["apple","banana","grapes","mango"];
// console.log(fruits);

// fruits.push("orange");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift("kiwi");
// console.log(fruits);

// fruits.splice(1,2);
// console.log(fruits);

// fruits.splice(1,0,"banana","grapes");
// console.log(fruits);

// fruits.splice(1,1,"kiwi");
// console.log(fruits);

// let newFruits=fruits.slice(1,3);
// console.log(newFruits);
