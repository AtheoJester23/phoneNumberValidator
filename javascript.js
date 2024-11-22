let inputContainer = document.getElementById("results-div");
let theOutput = "";

document.querySelector(".checkBtn").addEventListener("click", () => {
  let theInput = document.getElementById("user-input");
  let inputVal = theInput.value.trim();
  let cleanedVal = inputVal.replace(/[-()]/g, "");
  let lengthVal = cleanedVal.length;
  let splitText = cleanedVal.split("");

  console.log(splitText);

  if (inputVal === "") {
    alert("Please provide a phone number");
  } else if (
    lengthVal === 11 &&
    (splitText[0] === "1" || splitText[0] === "5")
  ) {
    theOutput += `Valid US number: <p>${inputVal}</p>`;
    inputContainer.innerHTML = theOutput;

    theInput.value = "";
  } else {
    theOutput += `Invalid US number: <p>${inputVal}</p>`;
    inputContainer.innerHTML = theOutput;

    theInput.value = "";
  }
});

document.querySelector(".clearBtn").addEventListener("click", () => {
  let theInput = document.getElementById("user-input");

  theOutput = "";
  inputContainer.innerHTML = theOutput;

  theInput.value = "";
});
