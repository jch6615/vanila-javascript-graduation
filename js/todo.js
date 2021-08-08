const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];
//todo 내용을 입력하면 내용을 저장할 Array를 만든다.
//❗️ localStorage에서는 Array를 저장 할 수 없다. 오직 텍스트만 저장 가능.

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
//Array의 형태로 저장하고 싶지만 그럴 수 없다.
//브라우저에 있는 기능을 사용해보자.
/*
✅ JSON.stringify
JavaScript object나 array나 어떤 것이든 string으로 바꿔주는 기능.
*/

function deleteToDo(event) {
    const div = event.target.parentElement;
    div.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(div.id));
    saveToDos();
}
//어떤 버튼의 내용을 지워야하는지 인식하지 못하고 있다.
//모든 버튼이 같은 eventListner을 가지고 있기 때문이다.
//submit 할때 처음 정보를 event argument를 통해 가져왔듯이 event 를 통해서 정보를 가져오자.
//event.target은 event가 발생한 대상을, event.target.paraentElement은 대상의 부모 요소를 알려준다.
/*
function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
*/
function paintToDo(newToDo) {
    const div = document.createElement("div");
    div.id = newToDo.id;
    const span = document.createElement("span")
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    div.appendChild(span);
    div.appendChild(button);
    toDoList.appendChild(div);
}

function handleToDosubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
