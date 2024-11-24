let inputContainer = document.getElementById("results-div");
let theOutput = "";

document.querySelector(".checkBtn").addEventListener("click", handleValidation);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleValidation();
  }
});

function handleValidation() {
  let theInput = document.getElementById("user-input");
  let theInputWSpace = theInput.value.trim();
  let inputVal = theInput.value.trim();
  let inputValNoSpace = inputVal.replace(/\s/g, "");
  let cleanedVal = inputVal.replace(/[-()\s]/g, "");
  let lengthVal = cleanedVal.length;
  let splitText = cleanedVal.split("");
  let splitTextNoClean = inputValNoSpace.split("");

  console.log(splitTextNoClean);
  let count = splitTextNoClean.filter((char) => char === "-").length;

  if (inputVal === "") {
    alert("Please provide a phone number");
  } else if (lengthVal === 11 && splitText[0] === "1") {
    if (inputVal.includes("(") && inputVal.includes(")")) {
      if (splitTextNoClean[1] === "(" && splitTextNoClean[5] === ")") {
        if (
          inputVal.includes("-") &&
          (splitTextNoClean[6] === "-" || splitTextNoClean[9] === "-")
        ) {
          if (splitTextNoClean[9] === "-" && count === 1) {
            validNum(inputVal, theInput);
          } else if (
            splitTextNoClean[6] === "-" &&
            splitTextNoClean[10] === "-" &&
            count === 2
          ) {
            validNum(inputVal, theInput);
          } else if (splitTextNoClean[6] === "-" && count === 1) {
            validNum(inputVal, theInput);
          } else {
            notValidNum(inputVal, theInput);
          }
        } else {
          notValidNum(inputVal, theInput);
        }
      } else {
        notValidNum(inputVal, theInput);
      }
    } else if (inputVal.includes("-")) {
      if (
        splitTextNoClean[4] === "-" ||
        splitTextNoClean[8] === "-" ||
        splitTextNoClean[7] === "-"
      ) {
        let count = splitTextNoClean.filter((char) => char === "-").length;

        if (splitTextNoClean[4] === "-" && count === 1) {
          validNum(theInputWSpace, theInput);
        } else if (
          splitTextNoClean[4] === "-" &&
          splitTextNoClean[8] === "-" &&
          count === 2
        ) {
          validNum(theInputWSpace, theInput);
        } else if (splitTextNoClean[7] === "-" && count === 1) {
          validNum(theInputWSpace, theInput);
        } else {
          notValidNum(theInputWSpace, theInput);
        }
      } else {
        notValidNum(theInputWSpace, theInput);
      }
    } else {
      validNum(theInputWSpace, theInput);
    }
  } else if (lengthVal === 10) {
    if (inputVal.includes("(") && inputVal.includes(")")) {
      if (splitTextNoClean[0] === "(" && splitTextNoClean[4] === ")") {
        if (inputVal.includes("-")) {
          if (splitTextNoClean[5] === "-" && count === 1) {
            validNum(theInputWSpace, theInput);
          } else if (
            splitTextNoClean[5] === "-" &&
            splitTextNoClean[9] === "-" &&
            count === 2
          ) {
            validNum(theInputWSpace, theInput);
          } else if (splitTextNoClean[8] === "-" && count === 1) {
            validNum(theInputWSpace, theInput);
          } else {
            notValidNum(theInputWSpace, theInput);
          }
        } else {
          validNum(theInputWSpace, theInput);
        }
      } else {
        notValidNum(theInputWSpace, theInput);
      }
    } else if (inputVal.includes("-")) {
      if (splitTextNoClean[3] === "-" && count === 1) {
        validNum(theInputWSpace, theInput);
      } else if (splitTextNoClean[6] === "-" && count === 1) {
        validNum(theInputWSpace, theInput);
      } else if (
        splitTextNoClean[3] === "-" &&
        splitTextNoClean[7] === "-" &&
        count === 2
      ) {
        validNum(theInputWSpace, theInput);
      } else {
        notValidNum(theInputWSpace, theInput);
      }
    } else {
      validNum(theInputWSpace, theInput);
    }
  } else {
    notValidNum(theInputWSpace, theInput);
  }
}

document.querySelector(".clearBtn").addEventListener("click", () => {
  let theInput = document.getElementById("user-input");

  theOutput = "";
  inputContainer.innerHTML = theOutput;

  theInput.value = "";
});

function validNum(theInputWSpace, theInput) {
  inputContainer.innerHTML += `<p class="results-text" style="color: #347928">Valid US number: ${theInputWSpace}</p>`;

  theInput.value = "";
  return;
}

function notValidNum(theInputWSpace, theInput) {
  inputContainer.innerHTML += `<p class="results-text" style="color: #ff0f0f">Invalid US number: ${theInputWSpace}</p>`;

  theInput.value = "";
  return;
}
