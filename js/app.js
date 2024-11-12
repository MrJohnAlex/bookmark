const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// tab event listeners
tabs.forEach(function (tab) {
  tab.addEventListener("click", onTabClick);
});

// Menu button event listener

btn.addEventListener("click", navToggle);

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });
  // Hide all panels

  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });
  //   Activate a new tab and panel based on the target

  e.target.classList.add("border-softRed", "border-b-4");
  const targetPanelId = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(targetPanelId)[0]
    .classList.remove("hidden");
}

// Show selected panel
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "../images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "../images/logo-bookmark.svg");
  }
}