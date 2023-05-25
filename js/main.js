let select = document.querySelector(".options");
let title = document.querySelector(".select_title");
console.log(select);

const guests = [
  "Филипп",
  "Дэннис & Кристина",
  "Яков & Ирина Энс",
  "Ильяр & Карина",
  "Даниэль Исаев",
  "Юля & Сергей",
  "Влад & Алина",
  "Лиза",
  "Семён & Ева",
  "Артур Иванович",
  "Люда Ерёмкина",
  "Алексей & Алёна",
  "Полина & Константин + Даша",
  "Наташа Веселова",
  "Ольга & Алекс",
  "Людмила Григорьевна",
  "Ольга Фролова",
  "Нургазы & Назгуля",
  "Алла & Али",
  "Руслан",
  "Валера & Светлана",
  "Коля & Настя",
  "Юра & Дарина",
  "Макс & Настя Энс",
  "Дима & Диана",
  "Светлана & Муслим",
  "Вкроника",
  "Андрей & Юлия",
  "Алекс & Мила",
  "Злата",
  "Давид",
  "Лариса с мужем",
  "Вера с мужем",
  "Владимир & Наталья Зубенко",
  "Александр & Ольга Дегтярёвы",
  "Гузаля",
  "Сейит",
  "Мадина",
  "Джамиля",
  "Мырзайым",
  "Наргиза",
  "Павел & Светлана",
  "Даниэль & Руфь",
  "Матвей & Лидия",
  "Богдан Широков",
  "Лиза Широкова",
  "Тимофей Широков",
  "Айбек Сапашов",
  "Олег & Айдай",
  "Алекс",
  "Динара",
  "Мирдин",
  "Саламат",
  "Дмитрий & Валентина",
  "Галина Пустернак",
  "Лариса Петрова",
];

let name = "";

guests.forEach((elem) => {
  const option = document.createElement("div");
  //   option.classList.add("guest");
  option.innerText = elem;

  select.append(option);
  option.addEventListener("click", () => {
    select.style.height = "0px";
    select.style.border = "0";
    title.innerText = option.innerText;
    name = option.innerText;
    console.log(name);
  });
});

console.log(name, "name");

title.addEventListener("click", () => {
  //   select.style.display = "block";
  select.style.height = "120px";
  select.style.transition = "0.8s";
  select.style.border = "1px solid black";
});

// console.log(option);

//? timer
// function countdown() {
//   const today = new Date();
//   const targetDate = new Date(2023, 7, 1); // Используем индекс 7 для месяца август (8 - 1)

//   const remainingTime = targetDate - today;

//   if (remainingTime <= 0) {
//     // Если время истекло, останавливаем таймер и выводим сообщение
//     clearInterval(timerId);
//     console.log("Свадьба!");
//     return;
//   }

//   const seconds = Math.floor((remainingTime / 1000) % 60);
//   const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
//   const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//   const weeks = Math.floor(days / 7);

//   console.log(
//     `Оставшееся время: ${weeks} недель, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`
//   );
// }

// // Запускаем таймер с интервалом 1 секунда
// const timerId = setInterval(countdown, 1000);

// time();
