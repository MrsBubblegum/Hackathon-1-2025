function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
  } else {
    body.classList.add("dark-theme");
  }
}
let themeButton = document.querySelector(".theme");
themeButton.addEventListener("click", changeTheme);

function sendMessage() {
  let contact = prompt("Did you enter your valid contact details?");
  contact = contact.toLowerCase().trim();

  if (contact === "yes") {
    alert("We'll reach out to you as soon as possible" + " 👩🏽‍💻 ");
  } else {
    alert(
      "Please enter the correct contact details and we'll get back to you" +
        "💟"
    );
  }
}

let messageButton = document.querySelector("button.sendButton");
messageButton.addEventListener("click", sendMessage);
