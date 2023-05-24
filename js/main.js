let select = document.querySelector(".options");
console.log(select);

const guests = [
  "Филипп",
  "Дэннис & Кристина",
  "Яков & Ирина Энс",
  "Ильяр & Карина",
  "Даниэль",
];

guests.forEach((elem) => {
  const option = document.createElement("div");
  //   option.classList.add("guest");
  option.innerText = elem;

  select.append(option);
  option.addEventListener("click", () => {
    select.style.height = "0px";
    select.style.border = "0";
  });
});

let title = document.querySelector(".select_title");
title.addEventListener("click", () => {
  //   select.style.display = "block";
  select.style.height = "120px";
  select.style.transition = "0.8s";
  select.style.border = "1px solid black";
});

// console.log(option);
