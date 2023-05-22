const validationInput = document.getElementById("validation-input");

function validateInput() {
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));
  const inputValue = validationInput.value.trim();
  const isValid = inputValue.length === expectedLength;

  validationInput.classList.remove("valid", "invalid");
  validationInput.classList.add(isValid ? "valid" : "invalid");
}
validationInput.addEventListener("blur", validateInput);
