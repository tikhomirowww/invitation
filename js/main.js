let select = document.querySelector(".options");
let title = document.querySelector(".select_title");
console.log(select);

const guests = [
  "Филипп",
  "Дэннис & Кристина",
  "Яков & Ирина Энс",
  "Ильяр & Карина",
  "Даниэль",
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
