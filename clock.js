let currDate = new Date();
let currTime  = currDate.getHours() + ':' +currDate.getMinutes() + ':' + currDate.getSeconds();
console.log(currTime)
let todayDate = currDate.toLocaleDateString()
console.log(todayDate)



function viewTimeandDate(){
    document.getElementById('time').innerHTML = currTime;
    document.getElementById('date').innerHTML = todayDate;
}
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(()=>{
    let currDate = new Date();
    let currTime  = currDate.getHours() + ':' +currDate.getMinutes() + ':' + currDate.getSeconds();
    let todayDate = currDate.toLocaleDateString(undefined,options);

    document.getElementById('time').innerHTML = currTime;
    document.getElementById('date').innerHTML = todayDate;
},0)