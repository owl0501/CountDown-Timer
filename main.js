//each time-unit element
const tu_months=document.querySelector('#months');
const tu_days=document.querySelector('#days');
const tu_hours=document.querySelector('#hours');
const tu_minutes=document.querySelector('#minutes');
const tu_seconds=document.querySelector('#seconds');

const newYears="1 Jan 2022";

function countdown(){
    const newYearsDate=new Date(newYears);
    const currentDate= new Date();

    //distance to new years eve (milliseconds)
    const dtNewYears=newYearsDate-currentDate;
    const seconds=Math.floor(dtNewYears/1000);
    const minutes=Math.floor(seconds/60);
    const hours=Math.floor(minutes/60);
    // const days=Math.floor(hours/24);

    // left times
    // console.log("left_s",seconds%60);
    // console.log("left_m",minutes%60); 
    // console.log("left_h",hours%24);
    // console.log("left_d",days);
    
    //left months(date.prototype.getMonth()-> 0~11)
    tu_months.innerHTML=(11-currentDate.getMonth());
    //left days
    tu_days.innerHTML=getLeftDays(currentDate.getUTCFullYear()
                                ,currentDate.getMonth()
                                ,currentDate.getDate());
    //left hours
    tu_hours.innerHTML=(hours%24);
    //left minutes
    tu_minutes.innerHTML=(minutes%60);
    //left seconds
    tu_seconds.innerHTML=(seconds%60);
}
//initial call
countdown();

setInterval(countdown,1000);

//check LeapYear
function isLeapYear(year){
    let b=false;
    if(year%400===0||(year%4===0 && year%100!=0)){
        b=true;
    }
    return b;
}

function getLeftDays(year, month, day){
    let leftDays=0;
    //month form 0 to 11
    switch(month){
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            leftDays=(31-day);
            break;
        case 1:
            if(isLeapYear(year)){
                leftDays=(29-day);
            }
            else{
                leftDays=(28-day);
            }
            break
        default:
            leftDays=(30-day);
            break;
    }
    return leftDays;
}

function formatTime(time){
    return time<10?`0${time}`:time;
}
