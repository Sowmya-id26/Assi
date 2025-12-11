document.querySelector("#loginBtn").addEventListener("click", () => {
  const mail = document.querySelector("#email").value;
  const pwd = document.querySelector("#password").value;

  const stored = JSON.parse(localStorage.getItem("user"));

  if (!stored) {
    alert("No account found");
    return;
  }

  if (mail === stored.mail && pwd === stored.pwd) {
    alert("Login successful");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "todos.html";
  } else {
    alert("Invalid details");
  }
});
