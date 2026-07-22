/* ==========================================================
   Academic Portfolio
   script.js - Part 1
   Features:
   ✓ Mobile Menu
   ✓ Dark Mode (saved in Local Storage)
   ✓ Sticky Header
   ✓ Scroll To Top
   ✓ Active Navigation
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       Mobile Navigation
    ===================================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });

    }

    /* =====================================================
       Dark Mode
    ===================================================== */

    const body = document.body;

    const toggle = document.querySelector(".theme-toggle");

    function enableDarkMode() {

        body.classList.add("dark");

        localStorage.setItem("theme", "dark");

        if (toggle) {

            toggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        }

    }

    function disableDarkMode() {

        body.classList.remove("dark");

        localStorage.setItem("theme", "light");

        if (toggle) {

            toggle.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    }

    if (localStorage.getItem("theme") === "dark") {

        enableDarkMode();

    }

    if (toggle) {

        toggle.addEventListener("click", () => {

            if (body.classList.contains("dark")) {

                disableDarkMode();

            } else {

                enableDarkMode();

            }

        });

    }

    /* =====================================================
       Sticky Header
    ===================================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.15)";

            header.style.transition = "0.3s";

        } else {

            header.style.boxShadow =
                "0 2px 10px rgba(0,0,0,0.05)";

        }

    });

    /* =====================================================
       Scroll To Top Button
    ===================================================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 500) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* =====================================================
       Active Navigation
    ===================================================== */

    const sections = document.querySelectorAll("section");

    const navItems = document.querySelectorAll(".nav-links a");

    function highlightNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active-link");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active-link");

            }

        });

    }

    window.addEventListener("scroll", highlightNav);

    highlightNav();

});
