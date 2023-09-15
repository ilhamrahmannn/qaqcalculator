document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  calculateButton.addEventListener("click", calculateCosineLaw);

  function calculateCosineLaw() {
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    if (
      isNaN(sideA) ||
      isNaN(sideB) ||
      isNaN(sideC) ||
      sideA <= 0 ||
      sideB <= 0 ||
      sideC <= 0
    ) {
      displayResult("Please enter valid positive values for all sides.");
      return;
    }

    // Check if input sides can form a valid triangle
    if (
      sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideB + sideC <= sideA
    ) {
      displayResult("These sides cannot form a valid triangle.");
      return;
    }

    const angleCInRadians = Math.acos(
      (Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2)) /
        (2 * sideA * sideB)
    );
    const angleCInDegrees = (angleCInRadians * 180) / Math.PI;

    displayResult(`Angle C ≈ ${angleCInDegrees.toFixed(2)} degrees`);
  }

  function displayResult(resultText) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = resultText;
  }
});

document
  .getElementById("calculate")
  .addEventListener("click", function () {
    // Get input values
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    // Check if input values are valid
    if (!isNaN(sideA) && !isNaN(sideC)) {
      // Calculate angle C (in radians)
      const angleC = (sideC * Math.PI) / 180;

      // Calculate side B using the Sine Law
      const sideB =
        (sideA * Math.sin(angleC)) / Math.sin(Math.PI - angleC);

      // Display the result
      document.getElementById(
        "result"
      ).innerHTML = `Side B: ${sideB.toFixed(2)}`;
    } else {
      // Display an error message if the inputs are not valid
      document.getElementById("result").innerHTML =
        "Please enter valid numbers for Side A and Side C.";
    }
  });

document
  .getElementById("sineLawForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const angleA = parseFloat(document.getElementById("angleA").value);
    const angleB = parseFloat(document.getElementById("angleB").value);
    const providedSide = parseFloat(
      document.getElementById("providedSide").value
    );

    if (!isNaN(angleA) && !isNaN(angleB) && !isNaN(providedSide)) {
      const angleASin = Math.sin((angleA * Math.PI) / 180);
      const angleBSin = Math.sin((angleB * Math.PI) / 180);
      const calculatedResult = providedSide * (angleASin / angleBSin);

      const threshold = 3;

      if (calculatedResult < threshold) {
        const predefinedSolution = 8.56;
        document.getElementById(
          "result"
        ).textContent = `Slanted length: ${calculatedResult.toFixed(
          2
        )}mm (Acceptable)`;
      } else {
        document.getElementById(
          "resultacute"
        ).textContent = `Slanted length: ${calculatedResult.toFixed(
          2
        )}mm (Not Acceptable)`;
      }
    } else {
      document.getElementById("resultacute").textContent =
        "Please enter valid numbers for Angle A, Angle B, and Provided Side Length.";
    }
  });

function generatePdfReport() {
  const marking = document.getElementById("marking").value;
  const date = document.getElementById("date").value;
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const sideC = parseFloat(document.getElementById("sideC").value);
  const result = parseFloat(document.getElementById("result").value);
  const angleA = parseFloat(document.getElementById("angleA").value);
  const angleB = parseFloat(document.getElementById("angleB").value);
  const providedSide = parseFloat(
    document.getElementById("providedSide").value
  );
  const resultacute = parseFloat(
    document.getElementById("resultacute").value
  );

  const pdf = new jsPDF();

  const header = "Right Angle Checking Report";
  const headerX = pdf.internal.pageSize.width / 2;
  const headerY = 10;

  pdf.setFontSize(16);
  pdf.text(header, headerX, headerY, { align: "center" });

  pdf.text(`Marking: ${marking}`, 10, 10);
  pdf.text(`Date: ${date}`, 10, 20);
  pdf.text(`Side A: ${sideA}`, 10, 30);
  pdf.text(`Side B: ${sideB}`, 10, 40);
  pdf.text(`Side C: ${sideC}`, 10, 50);
  pdf.text(`Angle A: ${angleA}`, 10, 60);
  pdf.text(`Angle B: ${angleB}`, 10, 70);
  pdf.text(`Provided Side: ${providedSide}`, 10, 80);

  pdf.save("Right Angle Module Report.pdf");
}

document
  .getElementById("generatePdfButton")
  .addEventListener("click", generatePdfReport);

document
  .getElementById("generatePdfButton")
  .addEventListener("click", function () {
    const resultContent = document.getElementById;
    document.getElementById("resultacute").textContent;

    const pdf = new jsPDF();

    pdf.text(resultContent, 10, 10);

    pdf.save("Right Angle Module Report.pdf");
  });

document
  .getElementById("recallResultButton")
  .addEventListener("click", function () {
    const calculationResult =
      document.getElementById("result").textContent;

    const angleValue = parseFloat(calculationResult.split(" ")[2]);

    if (!isNaN(angleValue)) {
      document.getElementById("angleA").value = angleValue;
    } else {
      alert("Error: Unable to recall the angle value.");
    }
  });