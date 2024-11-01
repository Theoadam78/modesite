document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#FFD700";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#fff";
        });
    });

    const heroText = document.querySelector(".hero-text");
    heroText.style.opacity = 0;

    setTimeout(() => {
        heroText.style.transition = "opacity 1.5s";
        heroText.style.opacity = 1;
    }, 500);

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
