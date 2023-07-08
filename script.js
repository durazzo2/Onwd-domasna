document.addEventListener("DOMContentLoaded", () => {
    const anchorLinks = document.querySelectorAll("a[href^='#']");

    anchorLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your email has been sent !");
    });
});
const skillLevels = document.querySelectorAll('.skill-level');

skillLevels.forEach(function(level) {
    const skillName = level.previousElementSibling.textContent.toLowerCase();
    level.classList.add(skillName);
});
