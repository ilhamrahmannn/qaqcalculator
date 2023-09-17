function updateDiagram() {
  const sideA = parseFloat(document.getElementById('sideA').value) || 0;
  const sideB = parseFloat(document.getElementById('sideB').value) || 0;
  const sideC = parseFloat(document.getElementById('sideC').value) || 0;

  const maxSide = Math.max(sideA, sideB, sideC);
  const scaleFactor = maxSide > 0 ? 80 / maxSide : 1;

  const scaledSideA = sideA * scaleFactor;
  const scaledSideB = sideB * scaleFactor;
  const scaledSideC = sideC * scaleFactor;
  const fontSize = 10 + scaleFactor * 3;

  const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 250 200">
          <polygon points="10,100 190,100 190,${100 - scaledSideA}" class="side" id="sideAHighlight"/>
          <text x="205" y="${100 - scaledSideA / 2}" text-anchor="middle" dy="0.7em" font-size="${fontSize}px">${sideA.toFixed(0)}</text>
          <text x="90" y="${85  + scaledSideA / 2}" text-anchor="middle" dy="0.7em" font-size="${fontSize}px">${sideB.toFixed(0)}</text>
          <text x="80" y="${90 - scaledSideA / 2}" text-anchor="middle" dy="0.7em" font-size="${fontSize}px">${sideC.toFixed(0)}</text>
      </svg>
  `;

  document.getElementById('triangleDiagram').innerHTML = svg;
  highlightSides();
}

function calculate() {
  const sideA = parseFloat(document.getElementById('sideA').value);
  const sideB = parseFloat(document.getElementById('sideB').value);
  const sideC = parseFloat(document.getElementById('sideC').value);

  if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
      const angleCRadians = Math.acos((Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2)) / (2 * sideA * sideB));
      const angleC = (angleCRadians * 180) / Math.PI;
      document.getElementById('result').textContent = angleC.toFixed(2) + '°'; 
  } else {
      document.getElementById('result').textContent = 'Invalid input';
  }
}

updateDiagram();



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


  
