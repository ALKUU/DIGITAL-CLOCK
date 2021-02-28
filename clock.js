function showTime(){
  var ap;
  var time=new Date();
  var hour=time.getHours();
  var min=time.getMinutes();
  var sec=time.getSeconds();
  if (hour>12){
    hour=hour-12;
    ap = "PM";
  }
  if (hour==12){
    hour=12;
    ap = "AM";
  }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    var currentTime = hour + ":" + min + ":" + sec + ap;
    document.getElementById("clock") .innerHTML = currentTime;
    setTimeout(showTime,1000);
}
showTime();
