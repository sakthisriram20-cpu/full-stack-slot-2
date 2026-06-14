// var a;
// a = 10;
// var a = 10;

// console.log(a);
// let b;
// b = 20;
// b = 40;
// console.log(b);
// const c = 50;
// console.log(c);

// var num = 10;
// var str = "orange";
// var bool = true;
// var undef;
// var nll = null;
// var symbol =Symbol('li');
// var bigInt = 123456789n;
// var arr = [1,2,3,4,5];
// var obj ={
//     name:"sakthi"
// }
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool );
// console.log(typeof undef);
// console.log(typeof nll);
// console.log(typeof symbol);
// console.log(typeof bigInt);
// console.log(typeof arr);
// console.log(typeof obj);

// var x = "10";
// var y = "20";
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);

// var x = 1;
// var y = "1";
// console.log(x > y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x <= y);
// console.log(x == y);
// console.log(x != y);
// console.log(x === y);
// console.log(x =! y);
  

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true ||true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

// var x = 10;
// var y = 20;
// console.log(x);
// x -= y;
 
// var x = 10;
// if(x%2===0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }
// var mark = 30;

// if(mark>=90){
//     console.log("O Grade");
// }
// else if(mark>=80){
//     console.log("A+ Grade");    
// }
// else if(mark>=70){
//     console.log("A Grade");
// }
// else if(mark>=60){
//     console.log("B+ Grade");
// }
// else if(mark>=50){
//     console.log("B Grade");
// }
// else if(mark>=35){
//     console.log("pass");
// }
// else{
//     console.log("Fail");
// }
// var x = 2;
// var result = x%2===0 ? "even" : "odd";
// console.log(result)
// var mark = 50;
// var grade = mark>=90 ? "O Grade" :
//             mark>=80 ? "A+ Grade" :
//             mark>=70 ? "A Grade" :
//             mark>=60 ? "B+ Grade" :
//             mark>=50 ? "B Grade" :
//             mark>=35 ? "pass" : "Fail";
// console.log(grade);            
// var day =3;
//  switch(day){
//     case 1:{
//         console.log("Sunday");
//         break;
//     }
//     case 2:{
//         console.log("Monday");
//         break;
//     }
//     case 3:{
//          console.log("Tuesday");
//     break;
//     }          
//     case 4:{
//         console.log("Wednesday");
//         break;
//     }
//     case 5:{
//         console.log("Thursday");
//         break;
//     }
//     case 6:{
//         console.log("Friday");
//         break;
//     }
//     case 7:{
//         console.log("Saturday");
//         break;
//     }
//     default:{
//         console.log("Invaild input");
       
//     }
//  }
// for(let i=8;i<=10;i++){
//     console.log(i);
// }
// var num =10245;
// var digit =0;
// while(num>0){
//     digit++;
//     num= Math.floor(num/10);
// }
// console.log(digit);
// var x = 1;
// console.log(x++);
// console.log(++x);

// var y = 2;
// console.log(y--);
// console.log(--y);
// var a = 1;
// var b = 1;
// var c = 0;
// var result = a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
// console.log(result);
// do{
//     console.log("Do...While");
// }while(false);

// while(false){
//     console.log("While Example");
// }
// for(let i=1;i<=10;i++){
//     if(i>5){
//         break;
//     }
//      console.log(i);
// }
// for(let i=1;i<=10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }
// function add(){
//     console.log(10+20);
// }
// add();
// add();
// add();
// function add(a,b){
//     console.log(a+b);
// }
// add(10+40);
// add();
// add();  
// function add(a=10,b=15){
//     console.log(a+b);
// }
// add(10,40);
// add(25,30);
// add(20);
// add(); 
// 
// var arr = [1,2,3,4,5];
// var square = arr.map((val) => (val**2));
// console.log(square)
// var even = arr.filter((val)=>(val%2===0));
// console.log(even);
// var sum = arr.reduce((total,val)=> (total+val),0);
// console.log (sum);