'use strict'
//////////////////////ARRAY//////////////////
const arr=['dinesh','rahul']
// console.log(arr.push('kishan'));
// console.log(arr.unshift('apple'));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.indexOf('dfdf'));
////////////////////OBJECTS/////////////
let obj={
    'name':function(name){
        this.age=39
        return `${name} is here`
    }
}
console.log(obj['name']('dinesh')); 
console.log(obj.age);
console.log(Math.trunc(Math.random()*6)+1);
console.log(arr.concat(['name',1,{name:'dinesh'}]));
//////////////DOM Manipulation//////////////
// document.querySelector('body').style.backgroundColor='red'
let heading=document.querySelector('.my-name');
heading.style.backgroundColor='yellow'
let newBtn=document.createElement('button');
newBtn.textContent='CLICK ME';
document.body.appendChild(newBtn);
newBtn.addEventListener('click',(event)=>{
    heading.textContent='ENTER NAME';
    document.querySelector('body').style.backgroundColor='red'
})

//------Hoisting and TDZ-----------//
// console.log(abc);
// const abc=10;
// console.log(abc());
// function abc(){
//     return ('abcd test');
// }
// const abc=()=>{
//     return ('abcd test');
// }
//==========WINDO OBJECT=========
// console.log(window);
// console.log(this);
//===========THIS KEYWORD=======
// function abc(){
//     console.log(this);
// }
// let abc=()=>{
//   console.log(this);
// }
// let obj2={
//   name:'dinesh',
//   class:'MCA',
//   age:1997,
//   calcAge:function(){
//     console.log(2024-this.age);
//   }
// }
let obj2={
  name:'dinesh',
  class:'MCA',
  age:1997,
  calcAge:function(){
    // console.log(this);
    const isMillenial=()=>{
      console.log(2024-this.age);
    }
    isMillenial();
  }
}
// obj2.calcAge()
//===========ARGUMENT KEYWORDs============
// const addExpr=function(a,b){
//   console.log(arguments);
//   return a+b
// }
// const addExpr=(a,b)=>{
//   console.log(arguments);
//   return a+b
// }
// addExpr(2,4,5,8,4)
//============Copy Objects============
// const obj1={
//   name:"dinesh",
//   age:20
// }
// const objNew=obj1;
// objNew.age='Mehra';
// const objNew=Object.assign({},obj1);
// objNew.age=30
// console.log(obj1,objNew);
//===============DESTRUCTURING====
// let arrNew=[1,2,3,4,5]
// let [a,,c]=arrNew;
// let [a,b,...c]=arrNew;

// console.log(a,b,c);
// let nestedArr=[1,2,3,[4,5]]
// let [i=0,,j=0,[k=0,l=0],m]=nestedArr
// console.log(i,j,k,l,m);
//===SWAP 2 VARIABLES WITH DESTRUCTURING======
// let first=1;
// let second=2;
// [second, first]=[first,second]
// console.log(first,second);
//===============DESTRUCTURING OBJECTs====
// let objDes={
//   f_name:'dinesh',
//   study:'MCA',
//   age:23,
//   college:{
//     graduate:'DU',
//     postGrad:"KUK"
//   }
// };
// let {f_name:fName,study:course,age}=objDes;
// console.log(fName,course,age);
// let {college:{graduate,postGrad}}=objDes
// console.log(graduate,postGrad);
//==========FUnction Destructuring===========
// const resturant={
//   orderDelivery:function({name='Rahul',study,age}){
//     console.log(name,study,age);
//   }
// }
// resturant.orderDelivery({name:'Dinesh',study:'MA',age:26})
//==============SPREAD OPEARTOR===========
// let arrNew=[1,2,3,4]
// let arrNew1=[0,...arrNew,5]
// console.log(arrNew1);
// let str='dinesh'
// let newStr=[...str,'M','E','H']
// console.log(newStr);
// let args=[1,2,3]
// const resturant={
//   name:'Dinesh',
//   orderDelivery:function(arg1,arg2,arg3){
//     console.log(arg1,arg2,arg3);
//   }
// }
// resturant.orderDelivery(...args)
// const newRestaurant={subject:'CS',company:'ADITA',...resturant};
// console.log(newRestaurant);
//==========REST OPERATOR=================
// let newArr=[1,2,3,4,5,6,7]
// let [a,b,...c]=newArr;
// console.log(a,b,c);
// function abcd(...value){
//   console.log(value);
// }
// abcd(1,2,3,4,5,6,7,8,9,0)
// let abc={
//   name:'Dinesh',
//   class:'MCA',
//   study:'IT'
// }
// let {name:userName='Ashish',...test}=abc;
// console.log(userName,test);
//==========SHORT CIRCUITING=============
// console.log(0 || false  || '' || null || undefined || 'Dinesg ');
// console.log(0 && false  && '' && null && undefined && 'Dinesg ');


// let res1={
//   guest:0,
//   name:'dinesh'
// }
// let res2={
//   guest:10,
//   name:'Rahul'
// }
// res1.guest=res1.guest ?? 90;
// res1.guest ??= 90;
// console.log(res1);
// res2.name=res2.name && 'ANONYMOUS';
// res2.name &&= 'ANONYMOUS'
// console.log(res2);
//==============FOR OF LOOOP==========
// let arrNew=['A','B','C','D','E'];
// console.log([...arrNew.entries()]);
// for (const [index,iterator] of arrNew.entries()) {
//     console.log(index,iterator);
// }
// let abc={
//   name:'Dinesh',
//   class:'MCA'
// }
// let def={
//   abc,
//   order:function(){
//     return 'hello'
//   },
//   order2(){
//     return 'World'
//   }
// }
// console.log(def.order(),def.order2());
// const weekdays=['Mon','Tue','Wed','Thur','Fri','Sat']
// let objTest={
//   [weekdays[2]]:{
//     test:'1'
//   },
//   [`${2+3}`]:{
//     test:'2'
//   }
// }
// console.log(objTest);
//=============OPTIONAL CHAINING==========
// let abc={
//   name:'dinesh',
//   class:10
// }
// console.log(abc.id?.test?.math);
// let arrNew=[
//   {
//     name:'dinesh',
//     class:10
//   },
//   {
//     name:'Mohit',
//     class:12
//   }
// ]
// console.log(arrNew?.[0]?.test?.class);
//===========LOOPING OBJECTS=======
// let testNew={
//   name:'Dinesh',
//   id:10
// }
// console.log(Object.entries(testNew));
// for (const [index,iterator] of Object.entries(testNew)) {
//   console.log(index,iterator);
// }
//===========SETS AND MAPS==============
// const arrTest=[1,2,3,4,2,3,4,4,5,6,7]
// const newArr=new Set(arrTest)
// console.log(newArr.has(22));
// console.log(newArr.add(23));
// console.log(newArr.delete(23));
// console.log(newArr.clear());
// console.log(newArr);
// for (const iterator of newArr) {
//     console.log(iterator);
// }
// console.log([...newArr]);
// const strCheck='dineshdininshsh';
// console.log(new Set(strCheck).size);

// let mapData=new Map()
// let arrNew=[1,2]
// mapData.set('name','dinesh').set(1,2).set(true,1234).set(arrNew,'hello')
// console.log(mapData.has([1,2]));
// mapData.delete('name')
// console.log(mapData.size);
// console.log(mapData.keys())
// console.log(mapData.get(arrNew))

// let newData=new Map([
//   [1,'dinesh'],[2,'Rahul'],[true,'yes']
// ])
// for (const data of newData.values()) {
//     console.log(data);
// }

// let objMap={
//   part1:{name:'Dinesh',study:"MCA"},
//   part2:"Mehra",
//   part3:"12334"
// }
// console.log(Object.entries(objMap));
// let newObjMap=new Map(
//   Object.entries(objMap)
// )
// console.log([...newObjMap]);
// console.log(newObjMap.entries());
