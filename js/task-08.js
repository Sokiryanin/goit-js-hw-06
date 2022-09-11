const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();
  //   console.log("сабмит формы");

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля");
    return;
  }
  console.log(`email: ${email.value}, password:${password.value}`);
  event.currentTarget.reset();
}

form.addEventListener("submit", onFormSubmit);
