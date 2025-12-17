
const Hamburger = document.querySelector(".hamburger");

// Event listener that toggles between open and closed when clicked
Hamburger.addEventListener("click", () => {
    const isOpen = Hamburger.getAttribute("aria-expanded") === "true";
    Hamburger.setAttribute("aria-expanded", !isOpen);
});