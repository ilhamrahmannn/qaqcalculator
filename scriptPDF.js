 // JavaScript to set the date in the currentDateTime element
 function setCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById('currentDateTime').textContent = formattedDate;
  }

  // Call the function to set the current date when the page loads
  setCurrentDate();