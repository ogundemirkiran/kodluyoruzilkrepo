let nameDOM = document.querySelector("#myName");
let clock = document.querySelector(".text-clock");

let userName = prompt("Lütfen Kullanıcı adı giriniz...");

if (userName) {
  nameDOM.innerHTML = `${userName}`;
} else {
  alert("İsim Girmediniz!!");

  location.reload();
}

const weekday = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

function showTime() {
  const today = new Date();
  let d = today.getDay();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  clock.innerHTML = `${h}:${m}:${s} ${weekday[d - 1]}`;
  setTimeout(showTime, 1000);
}

showTime();
