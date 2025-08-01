let startTime = 0;
let elapsedTime = 0;
let intervalId;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const totalSeconds = Math.floor(time / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

startBtn.onclick = function () {
    if (!isRunning) {
      startTime = Date.now();
      intervalId = setInterval(updateDisplay, 1000);
      isRunning = true;
  
      startBtn.style.display = "none";
      pauseBtn.style.display = "inline-block";
      resumeBtn.style.display = "none";
    }
};
  
pauseBtn.onclick = function () {
    if (isRunning) {
      clearInterval(intervalId);
      elapsedTime += Date.now() - startTime;
      isRunning = false;
  
      pauseBtn.style.display = "none";
      resumeBtn.style.display = "inline-block";
    }
};
  
resumeBtn.onclick = function () {
    if (!isRunning) {
      startTime = Date.now();
      intervalId = setInterval(updateDisplay, 1000);
      isRunning = true;
  
      resumeBtn.style.display = "none";
      pauseBtn.style.display = "inline-block";
    }
};
  

resetBtn.onclick = function () {
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00";
    laps.innerHTML = "";
  
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
};
  

lapBtn.onclick = function () {
  if (isRunning) {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
};