

// // Hardcoded birthdate
// const birthdate = new Date('1995-10-29');

// // Current date and time
// const now = new Date();







var countDownDate = new Date("March 23, 2023 00:00:00").getTime();

var c = setInterval(function(){
    var now = new Date().getTime();
    var diff = countDownDate - now;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(diff < 0){
        clearInterval(c);
        
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    }

},1000);




