 const input = document.getElementById("myInput");
  const counter = document.getElementById("charCount");
  const maxLength = 200;

  input.addEventListener("input", function () {
    let length = input.value.length;


    counter.textContent = length + " / " + maxLength + " characters";


    if (length > maxLength) {
      input.value = input.value.slice(0, maxLength);
      alert("Maximum 200 characters allowed!");
    }
  });