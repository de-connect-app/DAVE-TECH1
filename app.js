const nameBox = document.getElementById("name-box");
const content = document.getElementById("content");
const displayName = document.getElementById("displayName");

function saveName() {
  const name = document.getElementById("username").value;
  if (!name) return alert("Please enter your name");
  localStorage.setItem("daveTechUser", name);
  loadUser();
}

function loadUser() {
  const savedName = localStorage.getItem("daveTechUser");
  if (savedName) {
    nameBox.style.display = "none";
    content.style.display = "block";
    displayName.textContent = savedName;
  }
}

loadUser();
