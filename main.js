// check for valid email js

const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.value;

  let validateEmail = () => {
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // if not correct add error class
    if (!filter.test(emailVal)) {
      form.classList.add("form-error");
      form.classList.remove("form-correct");
      // if correct add correct class and remove error class
    } else {
      form.classList.remove("form-error");
      form.classList.add("form-correct");
    }
  };
  validateEmail();
});
