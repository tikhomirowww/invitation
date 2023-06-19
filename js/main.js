let select = document.querySelector(".options");
let title = document.querySelector(".select_title");
console.log(select);

const guests = [
  "Валерий & Светлана Кимяевы",
  "Дэннис & Кристина Энс",
  "Юля & Сергей Мухаморовы",
  "Влад & Алина Мухаморовы",
  "Лиза Мухаморова",
  "Семён & Ева Мухаморовы",
  "Артур & Ольга Бер",
  "Люда Ерёмкина",
  "Алексей & Алёна Ерёмкины",
  "Дима и Таня Пановы",
  "Бабушка и Рита Мухаморовы",
  "Александр и Лиля Мухаморовы",
  "Полина & Константин + Даша Высочины",
  "Наташа Веселова",
  "Ольга & Алекс Непианиди",
  "Людмила Григорьевна",
  "Руслан Тихомиров",
  "Коля & Настя Кимяевы",
  "Юра & Дарина Кимяевы",
  "Дима & Диана Кимяевы",
  "Лариса с мужем Кимяевы",
  "Вера с мужем Кимяевы",
  "Филипп Абдулин",
  "Яков & Ирина Энс",
  "Ильяр & Карина Сабировы",
  "Даниэль Исаев",
  "Ольга Фролова",
  "Нургазы & Назгуля",
  "Алла & Али",
  "Макс & Настя Энс",
  "Светлана & Муслим Абдулины",
  "Вероника Абдулина",
  "Андрей & Юлия Гришаевы",
  "Алекс & Мила Исаевы",
  "Злата Пустарнак",
  "Давид Исаев",
  "Владимир & Наталья Зубенко",
  "Александр & Ольга Дегтярёвы",
  "Гузаля Махмудова",
  "Богдан и Евангелина Гасановы",
  "Сейит",
  "Мадина Доконова",
  "Джамиля Мухамедова",
  "Мырзайым Мирланбек к.",
  "Наргиза Табылды к.",
  "Павел & Светлана Широковы",
  "Даниэль & Руфь Сайфулины",
  "Матвей & Лидия Широковы",
  "Богдан Широков",
  "Лиза Широкова",
  "Тимофей Широков",
  "Айбек Сапашов",
  "Олег & Айдай",
  "Алекс Назаренко",
  "Динара",
  "Мирдин",
  "Саламат",
  "Дмитрий & Валентина Кузьменко",
  "Галина Пустарнак",
  "Лариса Петрова",
];

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
