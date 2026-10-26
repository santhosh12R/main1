const button = document.getElementById("action-btn");
const statusDiv = document.getElementById("status");
const greeting = document.getElementById("greeting");

let clicks = 0;
const messages = [
  "You clicked the button! 🎉",
  "Hello from JavaScript! ✨",
  "Have a wonderful day! 🚀",
  "Keep building awesome things! 💻"
];

button.addEventListener("click", () => {
  clicks++;
  const msgIndex = (clicks - 1) % messages.length;
  statusDiv.textContent = `${messages[msgIndex]} (Clicks: ${clicks})`;
  greeting.style.transform = "scale(1.05)";
  setTimeout(() => {
    greeting.style.transform = "scale(1)";
  }, 200);
});
