function countdown() {
  const today = new Date();
  const targetDate = new Date(2023, 7, 1); // Используем индекс 7 для месяца август (8 - 1)

  const remainingTime = targetDate - today;

  if (remainingTime <= 0) {
    // Если время истекло, останавливаем таймер и выводим сообщение
    clearInterval(timerId);
    document.getElementById("timer").textContent = "Время истекло!";
    return;
  }

  const seconds = Math.floor((remainingTime / 1000) % 60);
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const remainingDays = days % 7; // Остаток от деления на 7

  document.getElementById("weeks").textContent = weeks;
  document.getElementById("days").textContent = remainingDays;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Запускаем таймер с интервалом 1 секунда
const timerId = setInterval(countdown, 1000);

let title = document.querySelector(".guest_name");

let guest = localStorage.getItem("guest");

title.innerText = guest;
console.log(guest);
