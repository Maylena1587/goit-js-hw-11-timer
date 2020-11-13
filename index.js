// const refs = {
//   days: document.querySelector('span[data-value="days"]'),
//   hours: document.querySelector('span[data-value="hours"]'),
//   mins: document.querySelector('span[data-value="mins"]'),
//   secs: document.querySelector('span[data-value="secs"]'),
// };

// class CountdownTimer {
//   constructor({ targetDate }) {
//     this.targetDate = targetDate;
//     this.init();
//   }

//   startTimer() {
//     const currentTime = Date.now();
//     const deltaTime = this.targetDate - currentTime;
//     const time = this.getTimeComponents(deltaTime);

//     this.updateClockface(time);
//   }

//   init() {
//     this.startTimer();
//     setInterval(() => {
//       this.startTimer();
//     }, 1000);
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }

//   // Метод для рассчета дней, часов, минут и секунд:
//   getTimeComponents(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { days, hours, mins, secs };
//   }

//   updateClockface({ days, hours, mins, secs }) {
//     refs.days.textContent = `${days}`;
//     refs.hours.textContent = `${hours}`;
//     refs.mins.textContent = `${mins}`;
//     refs.secs.textContent = `${secs}`;
//   }
// }
const daysElem = document.querySelector('span[data-value="days"]');
const hoursElem = document.querySelector('span[data-value="hours"]');
const minsElem = document.querySelector('span[data-value="mins"]');
const secsElem = document.querySelector('span[data-value="secs"]');


class CountdownTimer {
  constructor({ targetDate } = {}) {
    this.targetDate = targetDate;
    this.init();
  }

  init() {
    this.refreshTimer();
    setInterval(() => {
      this.refreshTimer();
    }, 1000);
  }

  getDeltaTime() {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    return deltaTime;
    }
    
    pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  

  updateClockface({ days, hours, mins, secs }) {
    daysElem.textContent = `${days}`;
    hoursElem.textContent = `${hours}`;
    minsElem.textContent = `${mins}`;
    secsElem.textContent = `${secs}`;
  }

  refreshTimer() {
    this.updateClockface(this.getTimeComponents(this.getDeltaTime()));
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('2020, 12, 11'),
});