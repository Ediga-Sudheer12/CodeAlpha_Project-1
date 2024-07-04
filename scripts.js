function calculateAge() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value - 1; // Months are 0-indexed
  const year = document.getElementById("year").value;

  const dob = new Date(year, month, day);
  const today = new Date();

  // Calculate difference in milliseconds
  const diffInMs = today.getTime() - dob.getTime();

  // Convert milliseconds to years (rounded down)
  const ageInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));

  const resultElement = document.getElementById("result");

  if (!isNaN(ageInYears)) {
    resultElement.textContent = `Your age is: ${ageInYears} years old.`;
  } else {
    resultElement.textContent = "Invalid date of birth entered.";
  }
}

function populateDateOptions() {
  const days = document.getElementById("day");
  const months = document.getElementById("month");
  const years = document.getElementById("year");

  // Add days (1-31)
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    days.appendChild(option);
  }

  // Add months (January - December)
  for (let i = 0; i < 12; i++) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const option = document.createElement("option");
    option.value = i + 1; // Months are 0-indexed
    option.text = monthNames[i];
    months.appendChild(option);
  }

  // Add years (recent 100 years)
  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 100; i <= currentYear; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    years.appendChild(option);
  }
}

populateDateOptions();
