import { displayTodos } from "./modules/displayTodos.js";

const loggedIn = localStorage.getItem("isLoggedIn");

if (!loggedIn) {
  alert("Login required");
  window.location.href = "login.html";
}

const loadTasks = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const list = await res.json();
    displayTodos(list.slice(0, 20));
  } catch (err) {
    console.log(err);
  }
};

loadTasks();
