document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  calculateButton.addEventListener("click", calculateCosineLaw);

  function calculateCosineLaw() {
      const sideA = parseFloat(document.getElementById("sideA").value);
      const sideB = parseFloat(document.getElementById("sideB").value);
      const sideC = parseFloat(document.getElementById("sideC").value);

      if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
          displayResult("Please enter valid positive values for all sides.");
          return;
      }

      // Check if the input sides can form a valid triangle
      if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
          displayResult("These sides cannot form a valid triangle.");
          return;
      }

      const angleCInRadians = Math.acos((Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2)) / (2 * sideA * sideB));
      const angleCInDegrees = (angleCInRadians * 180) / Math.PI;

      displayResult(`Angle C ≈ ${angleCInDegrees.toFixed(2)} degrees`);
  }

  function displayResult(resultText) {
      const resultDiv = document.getElementById("result");
      resultDiv.textContent = resultText;
  }
});
