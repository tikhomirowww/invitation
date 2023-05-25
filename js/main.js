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
    localStorage.setItem("guest", option.innerText);
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
console.log(title.innerText);

let sendBtn = document.querySelector("#send");
sendBtn.addEventListener("click", () => {
  if (title.innerText === "Гости") {
    alert("Пожалуйста выберите ваше имя!");
    return;
  }
  window.location.href = "./main.html";
});
