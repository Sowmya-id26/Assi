const btn = document.querySelector("#signupBtn");

btn.addEventListener("click", () => {
  const mail = document.querySelector("#email").value;
  const pwd = document.querySelector("#password").value;

  if (mail && pwd) {
    const userData = { mail, pwd };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Account created");
    window.location.href = "login.html";
  } else {
    alert("Please fill in all fields");
  }
});
