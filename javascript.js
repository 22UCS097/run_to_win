let box=document.querySelector('.box');
let row=document.querySelectorAll('.row');

row[0].style.backgroundColor="yellow";
let sum1=0,sum2=0;
let num2=0;
let change=true;
box.addEventListener('click',()=>{
    const audio=new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg');

  audio.play();
 let num= Math.floor(Math.random()*6)+1;
  box.innerText=num;
  
  if(sum1===sum2){
    row[sum1].style.backgroundColor="yellow";

  }
  if(sum1>=25){
  document.write("winner is 1");
  return ;
  }
  else if(sum2>=25){
    document.write("winner is 2");

  }
  else{
    if(change){
      sum1+=num;
      row[sum1].style.backgroundColor="red"
    row[sum1-num].style.backgroundColor="rgb(119, 146, 25)";
}
  else{
    num2=num;
    sum2+=num;
    row[sum2].style.backgroundColor="blue";
    row[sum2-num2].style.backgroundColor="rgb(119, 146, 25)";
    
  }
}
    change=!change;
  


});


console.log(row[5].id);
for(let i=0;i<25;i++){
  row[i].innerText=row[i].id
}







    



   

   
