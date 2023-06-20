let select = document.querySelector(".options");
let title = document.querySelector(".select_title");
console.log(select);

const guests = [
  "Руслан Тихомиров",
  "Сергей & Юля Мухаморовы",
  "Влад & Алина Мухаморовы",
  "Лиза Мухаморова",
  "Семён & Ева Мухаморовы",
  "Бабушка и Рита Мухаморовы",
  "Александр и Лиля Мухаморовы",
  "Люда Ерёмкина",
  "Алексей & Алёна Ерёмкины",
  "Дима и Таня Пановы",
  "Полина & Константин + Даша Высочины",
  "Артур & Ольга Бер",
  "Ольга Фролова",
  "Алла & Али",
  "Наташа Веселова",
  "Ольга & Алекс Непианиди",
  "Людмила Григорьевна",
  "Валерий & Светлана Кимяевы",
  "Коля & Настя Кимяевы",
  "Юра & Дарина Кимяевы",
  "Дима & Диана Кимяевы",
  "Лариса с мужем Кимяевы",
  "Вера с мужем Кимяевы",
  "Павел & Светлана Широковы",
  "Даниэль & Руфь Сайфулины",
  "Матвей & Лидия Широковы",
  "Богдан Широков",
  "Лиза Широкова",
  "Тимофей Широков",
  "Нургазы & Назгуля",
  "Яков & Ирина Энс",
  "Дэннис & Кристина Энс",
  "Ильяр & Карина Сабировы",
  "Макс & Настя Энс",
  "Светлана & Муслим Абдулины",
  "Андрей & Юлия Гришаевы",
  "Олег и Лола Исаевы",
  "Владимир & Наталья Зубенко",
  "Александр & Ольга Дегтярёвы",
  "Дмитрий & Валентина Кузьменко",
  "Галина Пустарнак",
  "Лариса Петрова",
  "Роза",
  "Арзу",
  "Мадина Доконова",
  "Джамиля Мухамедова",
  "Мырзайым Мирланбек к.",
  "Наргиза Табылды к.",
  "Айбек Сапашов",
  "Олег & Айдай",
  "Алекс Назаренко",
  "Динара",
  "Мирдин",
  "Саламат",
  "Гузаля Махмудова",
  "Богдан и Евангелина Гасановы",
  "Сейит",
  "Алекс & Мила Исаевы",
  "Филипп Абдулин",
  "Нурай",
  "Дарина Гирич",
  "Олеся Гирич",
  "Вероника Гирич",
  "Даниэль Исаев",
  "Давид Исаев",
  "Злата Пустарнак",
  "Вероника Абдулина",
];

console.log(guests.length, "kolichestvo gosteyyyyyyy");

let name = "";

guests.forEach((elem) => {
  const option = document.createElement("div");
  option.innerText = elem;

  select.append(option);
  option.addEventListener("click", () => {
    select.style.height = "0px";
    select.style.border = "0";
    title.innerText = option.innerText;
    name = option.innerText;
    localStorage.setItem("guest", option.innerText);
    console.log(name);
  });
});

console.log(name, "name");

title.addEventListener("click", () => {
  select.style.height = "120px";
  select.style.transition = "0.8s";
  select.style.border = "1px solid black";
});
console.log(title.innerText);

let sendBtn = document.querySelector("#send");
sendBtn.addEventListener("click", () => {
  if (title.innerText === "Гости") {
    alert("Пожалуйста выберите ваше имя!");
    return;
  }
  window.location.href = "./main.html";
});
