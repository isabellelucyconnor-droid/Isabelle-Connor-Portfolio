const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navItems.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

const updateActiveLink = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
};

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

const heroName = document.getElementById("hero-name");
const fullName = "Isabelle Connor";
let nameIndex = 0;

if (heroName) {
    heroName.classList.add("is-typing");

    const typeWriter = () => {
        heroName.textContent = fullName.slice(0, nameIndex);
        nameIndex += 1;

        if (nameIndex <= fullName.length) {
            setTimeout(typeWriter, 100);
        } else {
            heroName.classList.remove("is-typing");
        }
    };

    setTimeout(typeWriter, 300);
}