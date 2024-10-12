




function getdayofweak(){

    let s= document.getElementById('day1');

    const day=["sunday","monday","tuesday","wednessday","thursday","friday","sutarday"];

    let today= new Date();
    let x= today.getDay();

    
        s.innerHTML= `${day[x]}  `;
    
   



      
} 
getdayofweak();   
  
setInterval(()=>{           
let hours =document.getElementById('hours');
        let min =document.getElementById('min');
        let sec= document.getElementById('sec');
        let ampm=document.getElementById('ampm');
        let date= document.getElementById('date');
        let month= document.getElementById('monthe');
        let year= document.getElementById('year');
         
       let q=new Date().getDate();
       let l=new Date().getMonth();
       let r= new Date().getFullYear();
       date.innerHTML=`${q}/`;
       month.innerHTML=`${l}/`;
       year.innerHTML=`${r}`;




       let h=new Date().getHours();
       let m=new Date().getMinutes();
       let x=new Date().getSeconds();



     

            
       let n= (h>12)?'pm':'am';
       h=(h>12)?(h-12):(h);

       if(h<10){
        hours.innerHTML=`0${h}:`;
       }
       else
       {
        hours.innerText=h;
       }
       if(m<10){
        min.innerHTML=`0${m}:`;
       }
       else
       {
        min.innerHTML=`${m}:`;
       }
       if(x<10){
        min.innerHTML=`0${x}`;
       }
       else
       {
        sec.innerHTML=x;
       }

       ampm.innerHTML=n;


},1000);


let checkbtn= document.getElementById('checkbtn');
let ul= document.getElementById('ulelement');
checkbtn.addEventListener('click',()=>{
    ul.classList.toggle('showdata');
    console.log('showdata');
    
}

)