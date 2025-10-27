document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".emailAndSubmit");
  const emailInput = document.getElementById("email");
  const errorText = document.getElementById("errorText");
  const successSection = document.querySelector(".success");
  const signUpSection = document.querySelector(".sign-up");
  const dismissBtn = document.querySelector(".dismiss");
  const successEmail = successSection.querySelector("strong");
  const container = document.querySelector(".container");


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    if (!emailPattern.test(emailValue)) {
      errorText.textContent = "Valid email required";
      errorText.style.display = "block";
      emailInput.style.border = "1px solid var(--red)";
      emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.1)";
      return;
    }

    errorText.style.display = "none";
    emailInput.style.border = "1px solid var(--grey)";
    emailInput.style.backgroundColor = "var(--white)";

    successEmail.textContent = emailValue;

    // Switch views
    signUpSection.style.display = "none";
    successSection.classList.remove("hidden");
    container.style.maxWidth = "400px";
  });

  // Handle dismiss button
  dismissBtn.addEventListener("click", () => {
    successSection.classList.add("hidden");
    signUpSection.style.display = "flex";
    container.style.maxWidth = "800px"
    emailInput.value = "";
  });
});
