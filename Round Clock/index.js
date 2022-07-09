setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let hr = document.querySelector(".hh");
  let min = document.querySelector(".mm");
  let sec = document.querySelector(".ss");

  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let am = hour >= 12 ? "PM" : "AM";

  //Convert into 12 hour format
  if (hour > 12) {
    hour = hour - 12;
  }

  //Adding zero if single digit
  {
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
  }

  hours.innerHTML = hour + "<br><span>Hours</span>";
  minutes.innerHTML = minute + "<br><span>Minutes</span>";
  seconds.innerHTML = second + "<br><span>Seconds</span>";
  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 * hour) / 12;
  mm.style.strokeDashoffset = 440 - (440 * minute) / 60;
  ss.style.strokeDashoffset = 440 - (440 * second) / 60;
});
