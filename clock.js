document.addEventListener("DOMContentLoaded", function() {
  let time = new Date();

  function Clock() {
    this.isAm = time.getHours() < 12 ? true: false;
    this.hour = time.getHours();
    if (this.hour === 0) {
      this.hour = 12;
    } else if (this.hour > 12) {
      this.hour -= 12;
    }
    this.minute = time.getMinutes();
    this.second = time.getSeconds();

    this.hourDisplay = document.querySelector('.hour');
    this.minuteDisplay = document.querySelector('.minute');
    this.secondDisplay = document.querySelector('.second');
    this.amPmDisplay = document.querySelector('.am-pm');

    this.incrementTime = function() {
      setInterval(this.incrementSeconds.bind(this), 1000);
    };

    this.incrementSeconds = function() {
      if (this.second < 59) {
        this.second += 1;
      } else if (this.second === 59) {
        this.second = 0;
        this.incrementMinutes();
      }
      this.render();
    };

    this.incrementMinutes = function() {
      if (this.minute < 59) {
        this.minute += 1;
      } else {
        this.minute = 0;
        this.incrementHours();
      }
    };

    this.incrementHours = function() {
      if (this.hour < 12) {
        if (this.hour === 11) {
          this.isAm = !this.isAm;
        }
        this.hour += 1;
      } else if (this.hour === 12) {
        this.hour = 1;
      }
    };

    this.render = function() {
      this.hourDisplay.innerHTML = pad(this.hour);
      this.minuteDisplay.innerHTML = ":" + pad(this.minute) + ":";
      this.secondDisplay.innerHTML = pad(this.second);
      this.amPmDisplay.innerHTML = this.isAm ? "AM" : "PM";
    };
  }


  const clock = new Clock();
  clock.incrementTime();

  const pad = function (num) {
    if (num < 10) {
      return `0${num} `;
    }

    return num;
  };
});
