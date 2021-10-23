let newItemDOM = document.querySelector("#liveToastBtn");
let inputDOM = document.getElementById("task");
let listDOM = document.querySelector("#list");
let toastDOM = document.querySelectorAll(".toast");

newItemDOM.addEventListener("click", newElement);
listDOM.addEventListener("click", missionComplite);

function newElement() {
  if (inputDOM.value.trim() != "") {
    let liTag = document.createElement("li");
    liTag.innerHTML = ` <span class="text-font"> ${inputDOM.value} </span>  <span class="close">X</span>`;
    listDOM.append(liTag);

    inputDOM.value = "";

    toastFunc(0);
  } else {
    toastFunc(1);
  }

  localStorageAdd();
}

function removeElement(event) {
  if (event.target.className == "close") {
    if (confirm("Silmek İstediğinize Emin Misiniz ?")) {
      event.target.parentElement.remove();
      localStorageAdd();
    }
  }
}

function missionComplite(e) {
  if (e.target.parentElement.id == "list") {
    e.target.classList.toggle("checked");
  } else if (e.target.className == "text-font") {
    e.target.parentElement.classList.toggle("checked");
  }
}

function toastFunc(e) {
  toastDOM[e].classList.remove("hide");
  toastDOM[e].classList.add("show");

  setTimeout(() => {
    toastDOM[e].classList.remove("show");
    toastDOM[e].classList.add("hide");
  }, 1000);
}

function localStorageAdd() {
  let listDOM = document.querySelectorAll("#list>li>.text-font");

  let newLocalArray = [];

  listDOM.forEach((item, index) => {
    newLocalArray.push(item.innerText);
  });

  localStorage.setItem("todo", JSON.stringify(newLocalArray));
}

function localStorageGet() {
  let localRes = JSON.parse(localStorage.getItem("todo"));

  localRes.forEach((item) => {
    let liTag = document.createElement("li");
    liTag.innerHTML = ` <span class="text-font"> ${item} </span>  <span class="close">X</span>`;
    listDOM.append(liTag);
  });
}

localStorageGet();
addEventListener("click", removeElement);
