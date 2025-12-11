export const displayTodos = (list) => {
  const wrap = document.querySelector("#container");
  wrap.innerHTML = "";

  list.forEach(item => {
    const box = document.createElement("div");
    box.style.border = "1px solid #bbb";
    box.style.padding = "10px";
    box.style.margin = "12px 0";

    box.innerHTML = `
      <h3>${item.title}</h3>
      <p>Status: ${item.completed ? "Done" : "Not Done"}</p>
    `;

    wrap.appendChild(box);
  });
};
