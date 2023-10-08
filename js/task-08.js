const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const userData = {};
  formData.forEach((value, key) => {
    userData[key] = value;
  });

  if (userData.email && userData.password) {
    console.log(userData);
    e.target.reset();
  } else {
    alert("Всі поля повинні бути заповнені !!!");
  }
});
