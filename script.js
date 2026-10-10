const dialog = document.getElementById("noticeDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogText = document.getElementById("dialogText");
const toast = document.getElementById("toast");

function showDialog(title, message) {
  dialogTitle.textContent = title;
  dialogText.textContent = message;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else window.alert(`${title}\n\n${message}`);
}
document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
document.getElementById("dialogOk").addEventListener("click", () => dialog.close());

document.getElementById("joinForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const pin = document.getElementById("pinInput").value.trim();
  const message = document.getElementById("joinMessage");
  if (!/^[0-9]{4,8}$/.test(pin)) {
    message.textContent = "Please enter a game PIN with 4–8 digits.";
    document.getElementById("pinInput").focus();
    return;
  }
  message.textContent = "";
  showDialog("Ready to join?", `You entered game PIN ${pin}. Connect this form to your game backend to join a live room.`);
});
document.getElementById("pinInput").addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/\D/g, "").slice(0, 8);
  document.getElementById("joinMessage").textContent = "";
});
document.getElementById("createButton").addEventListener("click", () => {
  showDialog("Create a Game", "Your quiz creation flow can be connected here. This clean starter is ready for your questions, quiz editor, and live game logic.");
});
document.getElementById("settingsButton").addEventListener("click", () => {
  showDialog("Settings", "Settings for your Samica experience will live here.");
});

document.querySelectorAll(".top-link, .side-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (link.hash && link.hash !== "#home" && !document.querySelector(link.hash)) {
      showDialog(link.textContent.trim(), "This page is ready to be added as the next step of your Samica website.");
    }
    if (link.classList.contains("top-link")) {
      document.querySelectorAll(".top-link").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    }
    if (link.classList.contains("side-link")) {
      document.querySelectorAll(".side-link").forEach((item) => item.classList.remove("selected"));
      link.classList.add("selected");
    }
  });
});
