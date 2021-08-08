const clock = document.querySelector("#clock");

//🌟 clock 🌟
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//그냥 시간대신 .padStart()를 첨가한 hours, minutes, seconds를 넣자.
//❗️date.getHours()..는 string형이 아니라 숫자이다.
//String(date.getHours()) 처럼 String()으로 감싸면 String, 즉 문자가 된다.

getClock()
setInterval(getClock, 1000);

const today = document.querySelector(".today");
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getToday() {
    const todayDate = new Date();
    const year = String(todayDate.getFullYear());
    const month = String(todayDate.getMonth() + 1).padStart(2, "0");
    const date = String(todayDate.getDate()).padStart(2, "0");
    const day = days[todayDate.getDay() - 1];
    today.innerText = `${year}.${month}.${date}.${day}`;
}

getToday();