const API_URL = "https://jsonplaceholder.typicode.com/todos";
const STORE_KEY = "todoRecords";

document.addEventListener("DOMContentLoaded", () => {
    startApp();
});

async function startApp() {
    const existingData = loadFromStorage();

    if (existingData.length > 0) {
        showMessage("Loaded todos from Local Storage");
        drawList(existingData);
        return;
    }

    try {
        showMessage("Fetching todos from API...");
        const response = await fetch(API_URL);
        const allTodos = await response.json();

        const slicedData = allTodos.slice(0, 20);

        saveToStorage(slicedData);
        drawList(slicedData);

        showMessage("Fetched and stored first 20 todos successfully");
    } catch (err) {
        showMessage("Failed to fetch data from API");
        console.log(err);
    }
}

// Save data
function saveToStorage(arr) {
    localStorage.setItem(STORE_KEY, JSON.stringify(arr));
}

// Load data
function loadFromStorage() {
    const saved = localStorage.getItem(STORE_KEY);
    return saved ? JSON.parse(saved) : [];
}

// UI render
function drawList(list) {
    const ul = document.getElementById("todoList");
    ul.innerHTML = "";

    if (list.length === 0) {
        ul.innerHTML = "<p>No Todos Available</p>";
        return;
    }

    list.forEach(item => {
        const li = document.createElement("li");
        li.className = "todo-item";

        li.innerHTML = `
            <span>${item.title} - <strong>${item.completed ? "Completed" : "Pending"}</strong></span>
            <button onclick="removeItem(${item.id})">Delete</button>
        `;

        ul.appendChild(li);
    });
}

// Delete & refresh
function removeItem(id) {
    const existing = loadFromStorage();
    const updated = existing.filter(todo => todo.id !== id);

    saveToStorage(updated);
    drawList(updated);

    showMessage("Todo deleted successfully");
}

function showMessage(msg) {
    document.getElementById("infoBox").textContent = msg;
}
