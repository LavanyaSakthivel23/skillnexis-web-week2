// ---------- Digital Clock ----------
function pad(n) {
  return n < 10 ? "0" + n : n;
}

function updateClock() {
  const now = new Date();
  const h = pad(now.getHours());
  const m = pad(now.getMinutes());
  const s = pad(now.getSeconds());
  document.getElementById("clock").textContent = h + ":" + m + ":" + s;
  document.getElementById("date").textContent = now.toDateString();
}

// ---------- Countdown ----------
// Default target: next New Year
const now0 = new Date();
let targetDate = new Date(now0.getFullYear() + 1, 0, 1, 0, 0, 0);

function updateCountdown() {
  const diff = targetDate - new Date();

  if (diff <= 0) {
    document.getElementById("days").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
    document.getElementById("countdown-title").textContent = "Time's up! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
}

// ---------- Custom date ----------
document.getElementById("set-btn").addEventListener("click", function () {
  const value = document.getElementById("target-date").value;
  if (!value) {
    alert("Please choose a date and time first.");
    return;
  }
  targetDate = new Date(value);
  document.getElementById("countdown-title").textContent =
    "Countdown to " + targetDate.toDateString();
  updateCountdown();
});

// ---------- Run every second ----------
updateClock();
updateCountdown();
setInterval(updateClock, 1000);
setInterval(updateCountdown, 1000);