"use strict";

// const windowSize = window.innerWidth;

const main = document.getElementById("main");
const successModal = document.getElementById("success-modal");
const form = document.getElementById("subscribe-form");
const email = document.getElementById("email-input");
const dismissBtn = document.getElementById("dismiss-btn");

// if (windowSize <= 768) {
//   document.getElementById("illustration-sign-up").src =
//     "./assets/images/illustration-sign-up-mobile.svg";
// }

function init() {
  // Resets form to original state
  form.classList.remove("failed");
  main.classList.remove("hidden");
  successModal.classList.add("hidden");
  email.value = "";
}

function checkEmpty(element) {
  if (element.value.trim() === "") {
    return "failed";
  } else {
    return "success";
  }
}

function showSuccessModal() {
  main.classList.add("hidden");
  successModal.classList.remove("hidden");
  successModal.querySelector("#replace-email").innerHTML = email.value.trim();
}

function validateForm() {
  let emailStatus = checkEmpty(email);

  if (emailStatus === "failed") {
    form.classList.add("failed");
  } else {
    form.classList.remove("failed");
    showSuccessModal();
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

dismissBtn.addEventListener("click", init);
