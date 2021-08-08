const ddayForm = document.querySelector(".dday-container");
const ddayText = document.querySelector(".dday-text");
const ddayDate = document.querySelector(".dday-date");
const ddayBtn = document.querySelector(".dday-container button");
const ddayViewer = document.querySelector(".dday-viewer");
const ddayTodo = document.querySelector(".dday-viewer span:first-child");
const ddayLeft = document.querySelector(".dday-viewer span:last-child");

const DDAY_NAME = "ddayName";
const DDAY_LEFTDAYS = "ddayLeftDays";

function saveDday(event) {
    event.preventDefault();
    localStorage.setItem(DDAY_NAME, ddayText.value);
    const dday = new Date(`${ddayDate.value}T00:00:00`);
    const today = new Date();
    const gap = dday.getTime() - today.getTime();
    const gapDay = Math.ceil(gap / (1000 * 60 * 60 * 24));
    localStorage.setItem(DDAY_LEFTDAYS, gapDay);
    paintDday();
}

function paintDday() {
    const ddayName = localStorage.getItem(DDAY_NAME);
    const ddayDays = localStorage.getItem(DDAY_LEFTDAYS);
    ddayTodo.innerText = ddayName;
    ddayLeft.innerText = ddayDays;
    ddayViewer.classList.remove(HIDDEN_CLASSNAME);
}

const savedDdayName = localStorage.getItem(DDAY_NAME);
const savedDdayDays = localStorage.getItem(DDAY_LEFTDAYS);

if (savedDdayDays === null || savedDdayName === null) {
    ddayForm.addEventListener("submit", saveDday);
} else {
    paintDday()
}
