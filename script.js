const loadingContainer = document.getElementById('loader');
const startButton = document.getElementById('startButton');
const progressText = document.getElementById('progressText');
const progressLine = document.getElementById('progressLine');
// debugger

function startProgress() {
  let startCounter = 0;

  const intervalId = setInterval(function () {
    startCounter = startCounter + 10;
    changeProgress(startCounter);

    if (startCounter == 100) {
      clearInterval(intervalId);
      stopLoading();
    }
  }, 1000);
}

function startLoading() {
  loadingContainer.classList.remove('hidden');
  startButton.classList.add('hidden');
  startProgress();
}

function stopLoading() {
  loadingContainer.classList.add('hidden');
  startButton.classList.remove('hidden');
}

function changeProgress(percentage) {
  progressText.innerText = `${percentage} %`;
  progressLine.style.width = `${percentage}%`;
}

startButton.addEventListener('click', startLoading);

