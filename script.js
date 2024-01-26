'use strict';
let btnAdd=document.getElementsByClassName('addbtn');
function addFun(){
    document.querySelector('body').classList.toggle('bg-color')
    let num1=document.querySelector('.num1').value;
    let num2=document.querySelector('.num2').value;
    alert(+num1 + +num2)
}
// let obj={
//     birthYear:1997,
//     dob:function(){
//         return 2024-this.birthYear;
//     }
// }
// console.log(obj['dob'](2006));
document.querySelector('body').style.backgroundColor='red';

console.log(Math.trunc(Math.random()*2)+1);
class abc{
     name;
     dob;
    constructor(name,dob){
        this.name=name;
        this.dob=dob
    }
}
console.log(new abc('dinesh','dob'));
console.log(typeof null);
console.log(typeof NaN);
// Type Coercion
console.log('23' + '10'+3);
console.log('23'-'10'-3);
console.log(Boolean({}));

//Switch Case Statement
let number=1
switch(number){
    case 1: console.log('Hello 1');
                // break;
    case '2': console.log('Hello 2');
                // break;
    case '3': console.log('Hello 3');
                // break;
        default: console.log('default');
}

let arrName=['dinesh', 'rahul']
// console.log(arrName.push('mark'));
arrName.unshift('mark')
console.log(arrName);
// console.log(arrName.pop());
// console.log(arrName.shift());
// console.log(arrName.indexOf('rahul'));
// console.log(arrName.includes('dinsesh'))