const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".sidebar-overlay");
const closeBtn = document.querySelector(".sidebar-close");
const sidebarMenu = document.querySelector(".sidebar-menu");


const desktopNavMenu = document.querySelector(".nav-menu");
const desktopExtras = document.querySelector(".additional-options-wrapper");

function buildSidebarMenuOnce() {
  if (!sidebarMenu || sidebarMenu.children.length > 0) return;

  // Clone main nav links
  if (desktopNavMenu) {
    desktopNavMenu.querySelectorAll("a").forEach((a) => {
      const li = document.createElement("li");
      li.appendChild(a.cloneNode(true));
      sidebarMenu.appendChild(li);
    });
  }

  // Divider + clone extra links
  if (desktopExtras) {
    const divider = document.createElement("li");
    divider.className = "sidebar-divider";
    sidebarMenu.appendChild(divider);

    desktopExtras.querySelectorAll("a").forEach((a) => {
      const li = document.createElement("li");
      li.appendChild(a.cloneNode(true));
      sidebarMenu.appendChild(li);
    });
  }
}

function openMenu() {
  buildSidebarMenuOnce();
  hamburger.setAttribute("aria-expanded", "true");
  sidebar.classList.add("is-open");
  sidebar.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
  document.body.classList.add("menu-open");
}

function closeMenu() {
  hamburger.setAttribute("aria-expanded", "false");
  sidebar.classList.remove("is-open");
  sidebar.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
  document.body.classList.remove("menu-open");
}

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);
closeBtn.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});