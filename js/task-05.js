const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function updateNameOutput() {
  const name = nameInput.value; 

  if (name) {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}

nameInput.addEventListener("input", updateNameOutput);

updateNameOutput();