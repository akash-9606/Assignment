
function startCountdown(newDateString) {
    const newDate = new Date(newDateString).getTime();
    const countdown = setInterval(() => {
      const currentDate = new Date().getTime();
      const diff = newDate - currentDate;
  
      if (diff <= 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = 'Event has passed';
        return;
      }
  
      let remainingSeconds = Math.floor(diff / 1000);
      const months = Math.floor(remainingSeconds / (86400 * (365.25 / 12)));
      remainingSeconds %= 86400 * (365.25 / 12);
      const days = Math.floor(remainingSeconds / 86400);
      remainingSeconds %= 86400;
      const hours = Math.floor(remainingSeconds / 3600);
      remainingSeconds %= 3600;
      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;
  
  
      document.querySelector(".months").innerHTML = months < 10 ? '0' + months : months;
      document.querySelector(".days").innerHTML = days < 10 ? '0' + days : days;
      document.querySelector(".hours").innerHTML = hours < 10 ? '0' + hours : hours;
      document.querySelector(".minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
      document.querySelector(".seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
  }
  
  startCountdown('2024-09-29 12:00:00');
  