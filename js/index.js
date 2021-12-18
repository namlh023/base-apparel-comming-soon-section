const root = document.querySelector(":root");

const form = document.querySelector(".form");

const error_text = document.querySelector(".error-text");
const success_text = document.querySelector(".success-text");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.elements["email"].value;
  if (validateEmail(email)) {
    success_text.style.display = "block";

    error_text.style.display = "none";
    root.style.setProperty("--display-error-icon", "none");
  } else {
    success_text.style.display = "none";

    error_text.style.display = "block";
    root.style.setProperty("--display-error-icon", "inline"); // Display icon error
  }
});
