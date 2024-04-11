// Імпорт бібліотеки flatpickr та її стилів
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// Імпорт бібліотеки iziToast та її стилів
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector("[data-start]")
const dataDeys = document.querySelector("[data-days]")
const dataHours = document.querySelector("[data-hours]")
const dataMinutes = document.querySelector("[data-minutes]")
const dataSeconds = document.querySelector("[data-seconds]")
const input = document.querySelector('#datetime-picker');



let intervalId;
let timeReturn;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    input.disabled = true;
    startTimer()
});
  




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
  onClose(selectedDates) {
      const newData = new Date(selectedDates[0]).getTime();
      const startData = Date.now()

      if (newData >= startData) {
          startBtn.disabled = false;
          timeReturn = newData - startData
          updateData(convertMs(timeReturn))
      } else {
        iziToast.error({
    fontSize: 'large',
        close: false,
        position: 'topRight',
        messageColor: 'white',
        timeout: 2000,
        backgroundColor: 'red',
        message: ("Please choose a date in the future")
});
      }
  },
};



function updateData({ days, hours, minutes, seconds}) {
        dataDeys.textContent = `${days}`;
        dataHours.textContent = `${hours}`;
        dataMinutes.textContent = `${minutes}`;
        dataSeconds.textContent = `${seconds}`;

}



function startTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(timer, 1000);
}

function timer() {
    if (timeReturn > 0) {
        timeReturn -= 1000;
        updateData(convertMs(timeReturn));
    } else {
        
        clearInterval(intervalId);
        input.disabled = false;
    }
}


function redoneData(value){
    return String(value).padStart(2, "0");
  }


flatpickr("#datetime-picker", options);



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = redoneData(Math.floor(ms / day)) ;
  // Remaining hours
  const hours = redoneData( Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = redoneData(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = redoneData(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
