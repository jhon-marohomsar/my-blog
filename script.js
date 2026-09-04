// ==========================================
// SECURE DESIGN BLOG - script.js
// ==========================================

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const href = this.getAttribute('href');

        if (href.startsWith('#')) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }

    });

});

// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ================================
// HEADER SHADOW
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 12px 30px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow =
            "0 5px 15px rgba(0,0,0,.15)";

    }

});

// ================================
// SCROLL REVEAL
// ================================

const reveals = document.querySelectorAll(
    ".blog-card, .about-text, .contact-box"
);

function revealElements() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// ================================
// READING PROGRESS BAR
// ================================

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});

// ================================
// BACK TO TOP BUTTON
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "▲";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================================
// FOOTER YEAR
// ================================

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML +=
`<p style="margin-top:20px;font-size:14px;opacity:.8;">
© ${year} Jhon Armand P. Marohomsar
</p>`;

// ================================
// HERO TITLE TYPING EFFECT
// ================================

const heroTitle = document.querySelector(".hero-text h1");

if (heroTitle) {

    const originalText = heroTitle.textContent;
    heroTitle.textContent = "";

    let i = 0;

    function typing() {

        if (i < originalText.length) {

            heroTitle.textContent += originalText.charAt(i);
            i++;

            setTimeout(typing, 70);

        }

    }

    window.addEventListener("load", typing);

}

// ================================
// SIDEBAR TOGGLE
// ================================

const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("sidebarToggle");

if (sidebar && toggle) {

    toggle.addEventListener("click", () => {

        sidebar.classList.toggle("show");

        if (sidebar.classList.contains("show")) {

            toggle.innerHTML = "✕";

        } else {

            toggle.innerHTML = "☰";

        }

    });

}

// ================================
// PARAGRAPH HOVER EFFECT
// ================================

const paragraphs = document.querySelectorAll(".blog-content p");

paragraphs.forEach(paragraph => {

    paragraph.addEventListener("mouseenter", () => {

        paragraph.style.transform = "scale(1.01)";
        paragraph.style.transition = ".25s";

    });

    paragraph.addEventListener("mouseleave", () => {

        paragraph.style.transform = "scale(1)";

    });

});

// ================================
// IMAGE ZOOM
// ================================

const blogImage = document.querySelector(".blog-card img");

if (blogImage) {

    blogImage.addEventListener("mouseenter", () => {

        blogImage.style.transform = "scale(1.03)";
        blogImage.style.transition = ".5s";

    });

    blogImage.addEventListener("mouseleave", () => {

        blogImage.style.transform = "scale(1)";

    });

}

console.log("Secure Design Blog Loaded Successfully!");

