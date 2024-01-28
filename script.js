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

// console.log(Math.trunc(Math.random()*2)+1);
class abc{
     name;
     dob;
    constructor(name,dob){
        this.name=name;
        this.dob=dob
    }
}
// console.log(new abc('dinesh','dob'));
// console.log(typeof null);
// console.log(typeof NaN);
// Type Coercion
// console.log('23' + '10'+3);
// console.log('23'-'10'-3);
// console.log(Boolean({}));

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
// console.log(arrName);
// console.log(arrName.pop());
// console.log(arrName.shift());
// console.log(arrName.indexOf('rahul'));
// console.log(arrName.includes('dinsesh'))
// Hoisting
// console.log(s==window.s);
// var s=10
// const d=10;
/* ------------------THIS KEYWORD ------------------- */
const jonas = {
    name:'dinesh',
    dob:1997,
    calAge:function(){
        self=this;
        // console.log(this);
        // console.log(2023-this.dob);
        const insideFunc=function(){
            // console.log(this);
            // console.log(self);
        }
        insideFunc()
    }
}
// jonas.calAge()
const sumNo=function(a,b){
    // console.log(arguments);
}
// sumNo(2,3)
/* ------------------Objects ------------------- */
const me={
    name:'dinesh',
    age:10
}
// const you=me;
// you.age=20
// console.log('You object===========',you,'Me object===========',me);

const you=Object.assign({},me)
you.age=20
// console.log('You object===========',you,'Me object===========',me);

/* ------------------Destructuring arrays ------------------- */
const arr=[1,2,3,4]
// const [first,second,...third]=arr;
const [first,,third]=arr;
// console.log(first,second,third);
// console.log(first,third);
/* ------------------Destructuring arrays--Swap two variables ------------------- */
let a=10,b=6;
[b,a]=[a,b];
// console.log(a,b);
let arr1=[1,2,[3,4]]
const [a1,,[b1,b2]]=arr1
// console.log(a1,b1,b2);

//Set Default values
// const [p=1,q=1,r=1,s=1]=arr1;
// console.log(p,q,r,s);

let obj={
    name1:'dinesh',
    dob:1997
}
const {name1,dob}=obj;
// console.log(name1,dob);

//--------------------Spread Opertor-------------
// const str='dinesh'
// const abcArr=[...str,'m']
// console.log(abcArr);

// const arrTest=[prompt('hello'),prompt('hello2 '),prompt('hello 3')];
// console.log(arrTest);
// function abcT(a,b,c){
//     console.log(a,b,c);
// }
// const arrTest=['a','b','c']
// abcT(...arrTest)

// let names={
//     name:'dinesh',
//     dob:1997
// }
// let educ={subject:'MCA',...names}
// console.log(educ);

//===============Rest operator=================
// const arrTest=['a','b','c','d','e','f','g']
// const [p,,q,...others]=arrTest;
// console.log(p,q,others);
// function add(...test){
//     console.log(test);
// }
// add(...arrTest)
// add('a','b','c','d','e','f','g');
// add()

//================For Of loop============
const arrTest=['a','b','c','d','e','f','g']
console.log([...arrTest.entries()]);
// for(let item of arrTest.entries()){
//     console.log(item);
// }
// let objLit1={
//     op:'mehra',
//     hp:'YES'
// }
// let objLit2={
//     name:'test',
//     test:'No',
//     ...objLit1

// }
// let es6Enchance={
//     op:'mehra',
//     hp:'YES',
//     callFun(){
//         console.log('hello');
//         return 1
//     }
// }
// console.log(es6Enchance.callFun());
// let es6Enchance={
//     op:'mehra',
//     hp:'YES',
//     [2+2]:{
//         abc:'123'
//     }
// }
// console.log(es6Enchance.sjk());

//================Looping Objects===============
let es6Enchance={
    op:'mehra',
    hp:'YES',
    [2+2]:{
        abc:'123'
    }
}
// for(let data of Object.values(es6Enchance)) console.log(data);
// for(let data of Object.keys(es6Enchance)) console.log(data);
// console.log(Object.keys(es6Enchance));
// console.log(Object.entries(es6Enchance));
// for(let  [keys,value] of  Object.entries(es6Enchance)) {
//     console.log(keys,value);
// }
//==================MAPS AND SETS=======================
// const orderSets= new Set(['a','a','a','b','b','c','d'])
// console.log(orderSets);
// console.log(orderSets.delete('a'));
// let newArray=[...orderSets]
// console.log(newArray);
// for (const iterator of orderSets) {
//     console.log(iterator);
// }




