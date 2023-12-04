// alert()

//  basic in js  //
//  Js its a programming language that can be used to make web pages interactive

//  Js can update and change both HTML and CSS

//  Data types in js  //
//  String: > any text or symbols between quotes "    "
//  
//  Number : > any number with or without decimals > integers or floats ,double
//  Boolean: > true or false                                   [ 0 ,1 ,2,3]
//  Array, List :  > collection of data inside square brackets [ 1,'test' , true , 2.5] > access to the data by index
//  Object : > collection of data inside curly brackets  { key:value}      {name:'test', age: 25, isStudent: true}
//  Undefined  : > variable declared but not assigned to a value
//  Null : > variable declared and assigned to null value
//  NAN : > not a number > 5/'test' > NaN


//  Variables in js  //

//  var > global scope :> can be accessed from anywhere in the code
//  var name = 'value'

//  let > block scope :> can be accessed only inside the block where it was declared
//  let name = 'value'

//  const > block scope :> can be accessed only inside the block where it was declared
//  const name = 'value'

// var nav= 'hi iam nav'; // declar var type: string 
// console.log("this var is ",typeof(nav),":",nav); // print the var type and value
// nav = 25; // reassign the value of var 
// console.log("this var is ",typeof(nav),":",nav);
// console.log('#'.repeat(30));

// let nav1= 'hi iam nav1';
// console.log("this let is ",typeof(nav1),":",nav1);
// console.log('#'.repeat(30));

// const nav2= 'hi iam nav2';
// console.log("this const is ",typeof(nav2),":",nav2);
// // nav2= 25;
// // console.log("this const is ",typeof(nav2),":",nav2);
// console.log('#'.repeat(30));
// var nav3;
// console.log("this var is ",typeof(nav3),":",nav3);  
// nav3 = 25;
// console.log("this var is ",typeof(nav3),":",nav3);

// console.log('#'.repeat(30));
// var nav4 = null;
// console.log("this var is ",typeof(nav4),":",nav4);

//alert('hello');

// var nav='hi iam js'; //declar var type is : string
// console.log('hi iam maen');
//console.log(nav);
 //console.log(typeof(nav)); 
//الtype of بعطيني نوع السطر يلي كتبته
//console.log("this var is",typeof(nav),":",nav); //print the var type and value
//nav=25; //ressign the value of var 
//console.log("this var is",typeof(nav),":",nav);
//console.log('#'.repeat(20))
// مره 20 # ال علامه  بتطبع الريبيت

//const nav2='hi iam nav2';
//nav2=23; //constيعني ثابت ما بنقدر نغير قيمته
// console.log("this const is ",typeof(nav2),":",nav2);

// var nav3;
// console.log("this const is ",typeof(nav3),":",nav3); //undefined nav3غير معرف لانه ما مال الها قيمه 
// nav3=25;
// console.log("this const is ",typeof(nav3),":",nav3);

//var nav4=null;
//console.log("this const is ",typeof(nav4),":",nav4);

var h1= document.getElementById('maen');
//  textContact or innerHTML contain the text inside the tag بتجيب التكست عن طريق التيكست او عن طريق ال اينر
//console.log(h1);
console.log(h1.innerHTML);
//  change the text inside the tag
//الاينر بتجيب حرفي لو كان بتجيب ال بوتن او الدايف كامل وهيك
// التيكست بتجيب شو دوا البوتن او جوا ال الدايف
h1.innerHTML='malkawii';//h1 الجمله يلي بتعرل ال 

h1.style.color='black'; //change the style color for h1
h1.style.backgroundColor='white';//change the stylefor backgroundcolor for h1

var img = document.getElementsByTagName('img');
console.log(img);
img[1].src='https://www.w3schools.com/js/pic_bulbon.gif';
img[3].width= '1';

img[7].src='https://www.w3schools.com/js/pic_bulbon.gif';



//   array 

var arr1 = [ 'test',10,true,25.5];
console.log(arr1);
console.log(arr1[0]);

//  object

var ovj1 = { name:'value', age: 25, isStudent: true};
console.log(ovj1);
console.log(ovj1.name);
console.log(ovj1.age);
console.log(ovj1.isStudent);

//  function :> block of code that can be called when needed