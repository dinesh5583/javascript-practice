'use strict'
//////////////////////ARRAY//////////////////
// const arr=['dinesh','rahul']
// console.log(arr.push('kishan'));
// console.log(arr.unshift('apple'));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.indexOf('dfdf'));
////////////////////OBJECTS/////////////
// let obj={
//     'name':function(name){
//         this.age=39
//         return `${name} is here`
//     }
// }
// console.log(obj['name']('dinesh')); 
// console.log(obj.age);
// console.log(Math.trunc(Math.random()*6)+1);
// console.log(arr.concat(['name',1,{name:'dinesh'}]));
//////////////DOM Manipulation//////////////
// document.querySelector('body').style.backgroundColor='red'
// let heading=document.querySelector('.my-name');
// heading.style.backgroundColor='yellow'
// let newBtn=document.createElement('button');
// newBtn.textContent='CLICK ME';
// document.body.appendChild(newBtn);
// newBtn.addEventListener('click',(event)=>{
//     heading.textContent='ENTER NAME';
//     document.querySelector('body').style.backgroundColor='red'
// })

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

//================STRINGS================
// console.log('dinesh'[2]);
// console.log('dinesh'.length);
// console.log('dineshne'.indexOf('n'));
// console.log('dineshne'.lastIndexOf('n'));
// console.log('dineshne'.substring('din'));
// let data='My name is dinesh'
// console.log(data.slice(3,7));
// console.log(data);
// console.log(data.slice(0,data.indexOf(' ')));
// console.log(data.slice(data.lastIndexOf(' ')+1));
// console.log(data.slice(-2));
//================STRINGS==================
// let str1='my name is dinesh name'
// console.log('                dinesh'.trimEnd());
// console.log(str1.replace('name','ID').toUpperCase());
// console.log(str1.replaceAll('name','ID').toUpperCase());
// console.log(str1.replace(/name/g,'ID').toUpperCase());
// console.log(str1.startsWith('name'));
// console.log(str1.endsWith('name'));
// console.log(str1.split('name').join('-'));
//  str1 = str1.split(' ');
//  let newCap=[]
// for(let d of str1){
//   newCap.push(d.replace(d[0],d[0].toUpperCase()))
  
// }
// console.log(newCap.join(' '));
// let cardNo='4111111111111111'.slice(-4);
// console.log(cardNo.slice(-4));
// cardNo.padStart(16,'x');
// console.log(cardNo.padStart(16,'x'));
// console.log(10-'');
// let data='dinesh'.repeat(6);
// console.log(data);
//========Coding Challange===========
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').textContent='Button'
// document.querySelector('button').addEventListener('click',(event)=>{
//   const text=document.querySelector('textarea').value;
//   console.log(text);
// })
//=========Call and Apply Method=============
// let delhi={
//   name:'Air India',
//   iatacode:'AT',
//   bookings:[],
//   book(flightNum,name){
//     console.log(`${name} booked a seat on ${this.name} flight ${this.iatacode} ${flightNum}`);
//     this.bookings.push({flight:`${this.iatacode} ${flightNum}`,name})
//   }
// }
// delhi.book(239,'Jonas');
// let euroWings={
//   name:'Air India',
//   iatacode:'AT',
//   bookings:[],
// }
// let bookAirline=delhi.book;
// bookAirline(23,'Dinesh Mehra'); Not Work
// bookAirline.call(euroWings,23,'Dinesh Mehra');
// bookAirline.apply(euroWings,[20,'Rahul Mehra']);

// console.log(delhi);
// console.log(euroWings);
//==========BIND METHOD==================
// let euroWings={
//   name:'Air India',
//   iatacode:'AT',
//   bookings:[],
// }
// euroWings.planes=300;
// euroWings.buyPlane=function(){
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// }
// euroWings.buyPlane()
// document.querySelector('.buy').addEventListener('click',euroWings.buyPlane.bind(euroWings));
// console.log(euroWings);
//==============CLOSURE=============
// const secureBooking=function(){
//   let passangerCount=0;
//   return function(){
//     passangerCount++;
//     console.log(`${passangerCount} passenger`);
//   }
// }
// let booker=secureBooking()
// booker();
// booker()
// booker()
// booker()
// booker()
// booker()
// console.dir(booker);
//===========ARRAYS=======
// let arrNew=[1,2,3,4,5,6];
// console.log(arrNew.slice(2,4))
// console.log(arrNew.splice(2,2))
// console.log(arrNew);

// document.querySelector('body').insertAdjacentHTML('afterbegin','<h1>Dinesh 1</>');
// document.querySelector('body').insertAdjacentHTML('beforebegin','<h1>Dinesh 2</>')
// document.querySelector('body').insertAdjacentHTML('afterend','<h1>Dinesh 3</>')
// document.querySelector('body').insertAdjacentHTML('beforeend','<h1>Dinesh 4</>')
//===============REDUCE METHOD==============
// let arr = [175, 50, 25];
//  function subofArray(total, num) {
//   console.log(total,num);
//     return total - num;
// }
 
// function myGeeks(item) {
//     console.log(arr.reduce(subofArray));
// }
// myGeeks()

// let username='DINESH SINGH MEHRA';
// let user=username.toLowerCase().split(' ').map((name)=>name[0]).join('')
// console.log(user);
//===========REDUCT METHOD=======
// let arr=[2,4,6,8,10];
// let value=arr.reduce((acc,curr)=>acc+curr)
// console.log(value);
// console.log(arr.find((val)=>val>6));
// console.log(arr.indexOf(4));
// console.log(arr.findIndex((num)=>num>6))
// console.log(arr.some((val)=>val%2==1));
// console.log(arr.every((values)=>values%2==0))
//==========FLAT AND FLATMAP=====
// let arr=[[[1,2],3],[4,[5,6]],7,8]
// console.log(arr.flat(2));
// let arr=[{name:'a',movements:[1,2]},{name:'b',movements:[3,4]}];
// const total=arr.flatMap((acc)=>acc.movements)
// console.log(total);
//===========SORT ARRAYS==========
// let arrTest=['Z','A','M','J','C']
// arrTest.sort()
// console.log(arrTest);
// let arrNum=[-130,-100,650,1300,200,3000,450,70]
// console.log(arrNum);
// arrNum.sort();
// arrNum.sort((a,b)=>{
//   if(a>b)
//   return 1;
// if(b>a)
// return -1
// })
// console.log(arrNum);
//==========Filling Arrays========
// const x= new Array(7)
// x.fill(1)
// x.fill(1,3)
// x.fill(1,3,5)
// console.log(x);
// console.log(Array.from([1,2,3,4,5,6,7]));
///=============NUMBERS============
// console.log(23===23.0);
// console.log(0.1+0.2);
// console.log(0.1+0.2==0.3);
// console.log(Number('666'));
// console.log(Number.parseInt('30',10));
// console.log(Number.parseInt('e30'));
// console.log(Number.parseInt('2.65'));
// console.log(Number.isFinite(1/0));
// console.log(Math.sqrt(25))
// console.log(25**(1/2))
// console.log(Math.max(4,3,1,4,6,2))
// console.log(Math.PI);
// console.log(Math.trunc(Math.random()*6)+1)
//==============BIG INT==========
// console.log(BigInt(99999999999999999999999999999999999999999n));
// console.log(typeof 20n);
// console.log(20n===20);
// console.log(20n==20);
//====================DATES===========
// console.log(new Date(2024,2,30,11,19,20));
// console.log(new Date().getTime()==Date.now());
// console.log(new Date(1711821148532));
// console.log(Date.now());

// let days=((new Date(2024,2,20)-new Date(2024,2,30))/1000*60*60*24);
// console.log(Math.abs(days))
//==============INTERNATIONALIZING DATES===========
// const date=new Intl.DateTimeFormat('en-US').format(new Date());
// const date=new Intl.DateTimeFormat('en-GB').format(new Date());
// const options={
//   hour:'numeric',
//   minute:'numeric',
//   day:'numeric',
//   month:"long",
//   year:"numeric",
//   weekday:'long'
// }
// const date=new Intl.DateTimeFormat('en-GB',options).format(new Date());

// console.log(date);
// const locale=navigator.language;
// console.log(locale);
// const num=92340239023923;
// let convertNum=new Intl.NumberFormat('en-IN').format(num);
// const options={
//   style:'currency',
//   curency:'USD',
  // useGrouping:true
// }
// let convertNum=new Intl.NumberFormat('en-IN',options).format(num);
// console.log(convertNum);
//===============Countdown Timwe============
// let time=100;
// let timerLabel=document.querySelector('.timer-label');
// const tick=function(){
//   const minute=String(Math.trunc(time/60)).padStart(2,0);
//   const sec=String(time%60).padStart(2,0)
//   timerLabel.textContent=`${minute}:${sec}`;
//   if(time==0){
//     clearInterval(timer);
//   }
//   console.log(minute);
//   time--
// }
// tick();
// const timer=setInterval(tick,1000)
//=========================DOM MANIPULATION=========
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.querySelector('.buy'));
// console.log(document.querySelectorAll('.buy'));
// console.log(document.getElementsByTagName('button'));
// let message=document.createElement('div');
// message.textContent='Create new div';
// message.innerHTML='<button>Got It!</button>'
// const bodyData=document.querySelector('.header');
// bodyData.prepend(message)
// bodyData.append(message)
// bodyData.append(message.cloneNode(true))
// bodyData.before(message)
// bodyData.after(message)
// document.addEventListener('click',(e)=>{
  // message.remove();
  //===Older Method
//   message.parentElement.removeChild(message)
// })
// message.style.backgroundColor='#37383d'
// message.style.width='120%';
// message.style.height='43px';
// console.log(message.style.height);
// console.log(message.style.backgroundColor);
// message.style.height=Number.parseFloat(getComputedStyle(message).height)+40+'px';

// console.log(getComputedStyle(message).height);
//=============Dom Atrributes==============
// let updateImg=document.querySelector('img');
// console.log(updateImg.alt);
// console.log(updateImg.src);
// console.log(updateImg.className);
// console.log(updateImg.getAttribute('designer'));
// updateImg.alt='hello testing'
// console.log(updateImg.alt);
// updateImg.setAttribute('company','adita')
// console.log(updateImg.getAttribute('src'));
// console.log(updateImg.dataset.versionNumber);
//=======CLASSES==============
// document.body.classList.add('bg-color','color-name')
// document.body.classList='bg-123'

//==============SCROLLING===============
