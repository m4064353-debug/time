// new Date()
// Date()

// console.dir(new Date());

// Оператор new создает новый экземпляр обьекта

const hour = document.querySelector(".h"),
  min = document.querySelector(".m"),
  sec = document.querySelector(".s"),
  hoursNumber = document.querySelector(".hours"),
  minutesNumber = document.querySelector(".minutes");

function clock() {
  let time = new Date(),
    hours = time.getHours() * 30,
    minutes = time.getMinutes() * 6,
    seconds = time.getSeconds() * 6;
  // console.log(seconds);

  

  hour.style = `transform:rotate(${hours}deg); transition:1s linear;`;
  min.style = `transform:rotate(${minutes}deg); transition:1s linear; `;
  sec.style = `transform:rotate(${seconds}deg); transition:1s linear;`;
  //   Recursion  - рекурсия - это когда функция перевызывает саму себя

  hoursNumber.innerHTML =
    time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  minutesNumber.innerHTML =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();  

  setTimeout(() => clock(), 1000);
}

clock();

// setTimeout(()=> {}, время в мс) - вызывает функцию через какое то время 1 раз
// setInterval(()=> {}, время в мс) - вызывает функцию через какое то время на постоянной основе

const links = document.querySelectorAll(".tabsItem");
const tabs = document.querySelectorAll(".tabsContentItem");

links.forEach((link, i) => {
  link.addEventListener("click", (event) => {
    // event.preventDefault() - убирает html события по умолчанию
    event.preventDefault();
    links.forEach((link, i) => {
      link.classList.remove("active");
      tabs[i].classList.remove("active");
    });
    link.classList.add("active");
    tabs[i].classList.add("active");
  });
});







const btn = document.querySelector('.stopwatch__btn'),
  hoursEl = document.querySelector('.stopwatch__hours'),
  minutesEl = document.querySelector('.stopwatch__minutes'),
  secondsEl = document.querySelector('.stopwatch__seconds');


let seconds = 0,
  minutes = 0,
  hours = 0,
  timerId = null;


function runStopwatch() {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;

    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  secondsEl.textContent = seconds;
  minutesEl.textContent = minutes;
  hoursEl.textContent = hours;

  
  timerId = setTimeout(runStopwatch, 10);
}


btn.addEventListener('click', function () {
  const currentStatus = btn.textContent.trim().toLowerCase();

  if (currentStatus === 'start') {
    
    btn.textContent = 'stop';
    runStopwatch();
  } else if (currentStatus === 'stop') {
    
    btn.textContent = 'clear';
    clearTimeout(timerId);
  } else if (currentStatus === 'clear') {
    
    btn.textContent = 'start';
    seconds = 0;
    minutes = 0;
    hours = 0;

    secondsEl.textContent = 0;
    minutesEl.textContent = 0;
    hoursEl.textContent = 0;
  }
});