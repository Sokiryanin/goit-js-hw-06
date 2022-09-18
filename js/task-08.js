const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();
  //   console.log("сабмит формы");

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля");
  }
  const object = {
    Email: email.value,
    Password: password.value,
  };
  console.log(object);
  event.currentTarget.reset();
}

form.addEventListener("submit", onFormSubmit);
