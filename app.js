function digitalClock(){
    let date=new Date();
    let hour = date.getHours();
    let min=date.getMinutes();
    let sec = date.getSeconds();

    let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    let currDate= date.getDate();
    let currDay=days[date.getDay()];
    let currMonth=months[date.getMonth()];
    let currYear=date.getFullYear()

   

     hour=hour<10 ? '0'+hour:hour;
     min=min<10 ? '0'+min:min;
     sec=sec<10 ? '0'+sec:sec;

    if(hour>12){
       let temp=hour;
       hour=temp-12;
       let finalTime= `${hour}:${min}:${sec}`;
       let finalCalender = `${currDay},${currDate}-${currMonth},${currYear}`;
      
       document.getElementById("time").innerText=finalTime;
       document.getElementById("format").innerText="PM";
       document.getElementById("calender").innerText=finalCalender;
      
    }
    else{
        let finalTime= `${hour}:${min}:${sec}`;
        let finalCalender = `${currDay},${currDate}-${currMonth},${currYear}`;
       
    document.getElementById("time").innerText=finalTime;
    document.getElementById("format").innerText="AM";
    document.getElementById("calender").innerText=finalCalender;
  

    }
    
    



    setInterval(digitalClock, 1000);
   

}

digitalClock();

