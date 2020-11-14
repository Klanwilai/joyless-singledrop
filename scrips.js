const time = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const countdown = document.getElementById("countdown");
const release = document.getElementById("release");
const background = document.getElementById("background");
const viewSelector = '.view';

// Animation class for transition
let tl = new TimelineMax({ paused: true });

tl.to(viewSelector, .2, {
  width: '100vw',
  height: '2px',
  background: '#ffffff',
  ease: Power2.easeOut
})
.to(viewSelector, .2, {
  width: '0',
  height: '0',
  background: '#ffffff'
});


// Set the date we're counting down to
const countDownDate = new Date("Nov 20, 2020 00:00:01").getTime();


// if(new Date().getTime() < countDownDate) {
  // Update the count down every 1 second
  const x = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    if (distance < 1000) {
      clearInterval(x);
      countdown.style.display = "none";
      background.style.display = "none";
      
      tl.restart();
      console.log("expired");

      setTimeout(() => {
        release.classList.add("show");
        tl.reverse();
      }, 1000)
    }

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    time.days.innerHTML = (days > 9 ? days : "0" + days) + ':';
    time.hours.innerHTML = (hours > 9 ? hours : "0" + hours) + ':';
    time.minutes.innerHTML = (minutes > 9 ? minutes : "0" + minutes) + ':';
    time.seconds.innerHTML = (seconds > 9 ? seconds : "0" + seconds) + '.';

  }, 1000);