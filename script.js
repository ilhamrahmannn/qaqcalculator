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



document.getElementById("calculate").addEventListener("click", function () {
    // Get input values
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    // Check if input values are valid
    if (!isNaN(sideA) && !isNaN(sideC)) {
      // Calculate angle C (in radians)
      const angleC = (sideC * Math.PI) / 180;

      // Calculate side B using the Sine Law
      const sideB = (sideA * Math.sin(angleC)) / Math.sin(Math.PI - angleC);

      // Display the result
      document.getElementById("result").innerHTML = `Side B: ${sideB.toFixed(2)}`;
    } else {
      // Display an error message if the inputs are not valid
      document.getElementById("result").innerHTML =
        "Please enter valid numbers for Side A and Side C.";
    }
  });



  document
        .getElementById("sineLawForm")
        .addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent the form from submitting

          // Get input values
          const angleA = parseFloat(document.getElementById("angleA").value);
          const angleB = parseFloat(document.getElementById("angleB").value);
          const providedSide = parseFloat(
            document.getElementById("providedSide").value
          );

          // Check if input values are valid
          if (!isNaN(angleA) && !isNaN(angleB) && !isNaN(providedSide)) {
            // Calculate the result using the sine law formula
            const angleASin = Math.sin((angleA * Math.PI) / 180);
            const angleBSin = Math.sin((angleB * Math.PI) / 180);
            const calculatedResult = providedSide * (angleASin / angleBSin);

            // Define the threshold (e.g., 3) for acceptability
            const threshold = 3;

            // Check if the calculated result is below the threshold
            if (calculatedResult < threshold) {
              // Display the predefined solution
              const predefinedSolution = 8.56; // Replace with your predefined solution
              document.getElementById(
                "result"
              ).textContent = `Slanted length: ${calculatedResult.toFixed(
                2
              )}mm (Acceptable)`;
            } else {
              // Display a message if the result is not acceptable
              document.getElementById(
                "resultacute"
              ).textContent = `Slanted length: ${calculatedResult.toFixed(
                2
              )}mm (Not Acceptable)`;
            }
          } else {
            // Display an error message if the inputs are not valid
            document.getElementById("resultacute").textContent =
              "Please enter valid numbers for Angle A, Angle B, and Provided Side Length.";
          }
        });


  
