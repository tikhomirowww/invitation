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

  let secTitle = document.querySelector(".sec");
  let minTitle = document.querySelector(".min");
  let dayTitle = document.querySelector(".day");
  let weekTitle = document.querySelector(".week");

  function formatTimeTitle(time, titleElement) {
    const timeString = time.toString();
    const timeArr = timeString.split("");
    let title;

    if (time === 1 || (timeArr[1] === "1" && timeArr[0] !== "1")) {
      title = "1";
    } else if (
      (time > 1 && time < 5) ||
      (timeArr[1] > "1" && timeArr[1] < "5" && timeArr[0] !== "1")
    ) {
      title = "2";
    } else {
      title = "3";
    }

    switch (titleElement) {
      case "sec":
        if (title === "1") {
          return "секунда";
        } else if (title === "2") {
          return "секунды";
        } else {
          return "секунд";
        }
      case "min":
        if (title === "1") {
          return "минута";
        } else if (title === "2") {
          return "минуты";
        } else {
          return "минут";
        }
      case "hour":
        if (title === "1") {
          return "час";
        } else if (title === "2") {
          return "часа";
        } else {
          return "часов";
        }
      case "day":
        if (title === "1") {
          console.log("1");
          return "день";
        } else if (title === "2") {
          return "дня";
        } else {
          console.log(title);
          return "дней";
        }
      case "week":
        if (title === "1") {
          return "неделя";
        } else if (title === "2") {
          return "недели";
        } else {
          return "недель";
        }
      default:
        return "";
    }
  }

  secTitle.innerText = formatTimeTitle(seconds, "sec");
  minTitle.innerText = formatTimeTitle(minutes, "min");
  dayTitle.innerText = formatTimeTitle(remainingDays, "day");
  weekTitle.innerText = formatTimeTitle(weeks, "week");
}

// Запускаем таймер с интервалом 1 секунда
const timerId = setInterval(countdown, 1000);

let title = document.querySelector(".guest_name");

let guest = localStorage.getItem("guest");

if (guest) {
  title.innerText = guest;
  console.log(guest);
}
