




// var x=10;



// for ( var i = 1; i<5; i++) {
//     console.log('this is before continue')//4
// if(i==2){
//      continue; // skip the number we are write in if condition like (i==2) 
//               //and it do skip for any thing under continue 
      
// }


// console.log('this var is' ,i);//3

    
// }


// //continue >> do skip
// //  break  >> do destroy to the loop


//  var inputTxt=document.getElementById('inputTxt')
// var searched=document.getElementById('searched')

//  function repatSearched(){

//  for ( var i=0; i,10 ;1++) {
//     console.log(inputTxt.value);    
// }



// var searchNumber =document.getElementById('searchNumber') 
// function changeTxt(){
//     console.log(inputTxt.Value);
// }


    // console.log(inputTxt.Value);
//     console.log(searched.innerHTML)
// searched.innerHTML=' '; // لتصفير القيمه للرقم الذي اريد طباعته

//    for(var i=0; i<searchNumber.value ;i++){
//     //apend to elemant تبني للعناصر
     
//     var pElemant=document.createElement('p');
//     pElemant.innerHTML=inputTxt.Value;
//     searched.appendChild(pElemant);
//    }
var searched=document.getElementById('searched')
var inputTxt=document.getElementById('inputTxt')

function repatSearched(){





  //  console.log(searched.children)
   var isExisted=true;
  //  console.log(inputTxt.value)
   for(var i =0; i <searched.children.length;i++){
    console.log(searched.children[i].innerHTML)
    console.log(searched.children[i].innerHTML == inputTxt.value)
   if(searched.children[i].innerHTML == inputTxt.value){
    searched.children[i].style.color='red';
     isExisted= false;



   }

   }

   if (isExisted) {
     alert('item is not found')
   }
   }
   