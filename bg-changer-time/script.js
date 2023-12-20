const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const copyToClipboardBtn = document.querySelector("#copy");

const generateColorCode = () => {
  const HEX = "0123456789ABCDEF";
  let colorCode = "#";
  //   console.log(ran);
  for (let i = 0; i <= 5; i++) {
    const ran = Math.floor(Math.random() * HEX.length);
    colorCode += HEX[ran];
  }
  document.body.style.backgroundColor = colorCode;

  const btn = document
    .querySelectorAll(".btn")
    .forEach((elm) => (elm.style.backgroundColor = colorCode));
  return colorCode;
  console.log("every second");
};

let timeref;
const startBackgroundChange = () => {
  if (!timeref) {
    timeref = setInterval(generateColorCode, 1000);
  }
};

const stopBackgroundChange = () => {
  clearInterval(timeref);
  timeref = null;
  console.log(timeref);
};

const copyToClipboard = () => {
  window.navigator.clipboard.writeText(generateColorCode());
  alert(`successfully copy to clipboard ${generateColorCode()}`);
};

startBtn.addEventListener("click", startBackgroundChange);
stopBtn.addEventListener("click", stopBackgroundChange);
copyToClipboardBtn.addEventListener("click", copyToClipboard);
console.log(document.querySelectorAll(".btn"));
