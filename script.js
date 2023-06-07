// let date = new Date();
//let hour = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();
// let day = date.getDate()
// console.log(day);//0-6
//0=sunday
//6=saturday
// console.log(sec);

// let customDate = new Date("5 Jun 2023");
// console.log(customDate);

const hourSpan = document.getElementById("hour");

const minuteSpan = document.getElementById("minute");

const secondSpan = document.getElementById("second");

const amorpmSpan=document.getElementById("amorpm");

console.log(hourSpan,minuteSpan,secondSpan,amorpmSpan);

function changeTime()
{
    const date= new Date();
     let hour = date.getHours();
     let min = date.getMinutes();
     let sec = date.getSeconds();

     hourSpan.textContent=hour;
     minuteSpan.textContent=min;
     secondSpan.textContent=sec;

     if (hour >= 0 && hour<= 12){
     amorpm = "AM";
   

     }else
     amorpm="PM";

     amorpmSpan.textContent=amorpm;
     
}

setInterval(changeTime,1000);