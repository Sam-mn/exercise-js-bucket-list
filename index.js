const list = document.querySelector(".list");

const par = document.createElement("p");
par.innerText = "Sky diving.";
list.appendChild(par);

const par2 = document.createElement("p");
par2.innerText = "Leart to play guitar.";
list.lastElementChild.insertAdjacentElement("afterend", par2);

console.log(list.innerHTML);

const htmlEle = "<p>Visit Japan.</p>";
// list.innerHTML = htmlEle;

list.insertAdjacentHTML("afterbegin", htmlEle);

const items = ["Buy a house.", "Travil the world.", "Run a marathon"];

items.forEach((i) => {
  const newItem = document.createElement("p");
  newItem.innerText = i;
  list.appendChild(newItem);
});

console.log("Number of items: " + list.children.length);

document.querySelector(".owner").innerText = "Samer Mn";

const newFirstItem = document.createElement("p");
newFirstItem.innerText = "Go to the gym.";
list.replaceChild(newFirstItem, list.children[0]);

const getTheMeddleIndex = Math.floor(list.children.length / 2);
const newMiddleItem = document.createElement("p");
newMiddleItem.innerText = "Learn a new language.";
list.replaceChild(newMiddleItem, list.children[getTheMeddleIndex]);

list.removeChild(list.lastElementChild);
