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
     let amorpm;
    //  let day=date.getDay();
    //  let daytype;

     hourSpan.textContent=hour;
     minuteSpan.textContent=min;
     secondSpan.textContent=sec;

     if (hour >= 0 && hour<= 12){
     amorpm = "AM";
   

     }else
     amorpm="PM";

     amorpmSpan.textContent=amorpm;

    //  if (day==0){
    //     daytype="Sunday";
    //  }if(day==1){
    //     daytype="Monday";
    //  }if(day==2){
    //     daytype="Tuesday";
    //  }if(day==3){
    //     daytype="Wednesday";
    //  }if(day==4){
    //     daytype="Thursday";
    // }if(day==5){
    //     daytype="Friday";
    //  }else{
    //     daytype="Saturday"
    //  }
    //  daytypeSpan.textContent=daytype;
}

setInterval(changeTime,1000);