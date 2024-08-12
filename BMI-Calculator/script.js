const calculate = () => {
  let bmi;
  let result = document.getElementById("result");

  let weight = parseInt(document.getElementById("weight").value);
  document.getElementById("weight-val").textContent = weight + "kg";

  let height = parseInt(document.getElementById("height").value);
  document.getElementById("height-val").textContent = height + "cm";

  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  result.textContent = bmi;

  if (bmi < 18.5) {
    category = "Under weight";
    result.style.color = "#ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
    result.style.color = "#0be881";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Over weight";
    result.style.color = "#ff884d";
  } else {
    category = "Obese";
    result.style.color = "#ff5e57";
  }
  document.getElementById("category").textContent = category;
};