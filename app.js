// Renders data from data.js into the HTML dynamically

document.addEventListener("DOMContentLoaded", () => {
    // 1. Personal Info
    document.title = `${portfolioData.personal.name} | Academic Portfolio`;
    document.getElementById("hero-role").innerText = portfolioData.personal.role;
    document.getElementById("profile-img").src = portfolioData.personal.image;
    document.getElementById("email-link").href = `mailto:${portfolioData.personal.email}`;
    document.getElementById("linkedin-link").href = portfolioData.personal.linkedin;
    document.getElementById("github-link").href = portfolioData.personal.github;
    document.getElementById("footer-name").innerText = portfolioData.personal.name;

    // 2. About Section
    const aboutContainer = document.getElementById("about-content");
    portfolioData.about.forEach(paragraph => {
        const p = document.createElement("p");
        p.innerHTML = paragraph;
        aboutContainer.appendChild(p);
    });

    // 3. Research Section
    const researchContainer = document.getElementById("research-list");
    portfolioData.research.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${item.title}:</strong> ${item.description}`;
        researchContainer.appendChild(li);
    });

    function addCardImage(card, image) {
        const picture = document.createElement("img");
        picture.className = "card-image";
        picture.src = image.src;
        picture.alt = image.alt;
        picture.loading = "lazy";
        picture.decoding = "async";
        card.prepend(picture);
    }

    // 5. Experience Section
    const expContainer = document.getElementById("experience-content");
    portfolioData.experience.forEach(exp => {
        const div = document.createElement("div");
        div.className = "card experience-card";

        div.innerHTML = `
            <h4>${exp.title}</h4>
            <h5>${exp.date}</h5>
            <p><em>${exp.organization}</em></p>
        `;
        const duties = document.createElement("ul");
        for (const duty of exp.duties) {
            const item = document.createElement("li");
            item.textContent = duty;
            duties.appendChild(item);
        }
        div.appendChild(duties);
        if (exp.image) addCardImage(div, exp.image);
        expContainer.appendChild(div);
    });

    // 6. Projects Section
    const projContainer = document.getElementById("projects-grid");
    portfolioData.projects.forEach((proj) => {
        const div = document.createElement("div");
        div.className = "card border-top-blue";
        div.innerHTML = `
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
        `;
        if (proj.image) {
            div.classList.add("work-card");
            addCardImage(div, proj.image);
        }
        const projectLinks = [
            [proj.notebook, "View notebook"],
            [proj.url, "View source code"],
            [proj.verification, "Verify lab credential"]
        ];
        for (const [url, label] of projectLinks) {
            if (!url) continue;
            const link = document.createElement("a");
            link.href = url;
            link.textContent = label;
            link.setAttribute("aria-label", `${label} for ${proj.title}`);
            const paragraph = document.createElement("p");
            paragraph.appendChild(link);
            div.appendChild(paragraph);
        }
        if (proj.details) {
            const details = document.createElement("details");
            const summary = document.createElement("summary");
            summary.textContent = "View all eight lab projects";
            const list = document.createElement("ol");
            for (const project of proj.details) {
                const item = document.createElement("li");
                const title = document.createElement("strong");
                title.textContent = project.title;
                const description = document.createElement("p");
                description.textContent = project.description;
                item.append(title, description);
                list.appendChild(item);
            }
            details.append(summary, list);
            div.appendChild(details);
        }
        if (proj.skills) {
            const heading = document.createElement("h4");
            heading.textContent = "Skills Gained";
            const skills = document.createElement("ul");
            for (const skill of proj.skills) {
                const item = document.createElement("li");
                item.textContent = skill;
                skills.appendChild(item);
            }
            div.append(heading, skills);
        }
        projContainer.appendChild(div);
    });

    // 7. Awards Section
    const awardsContainer = document.getElementById("awards-list");
    portfolioData.awards.forEach(award => {
        const li = document.createElement("li");
        li.innerHTML = award;
        awardsContainer.appendChild(li);
    });
});

const menuToggle = document.getElementById("mobile-toggle");
const mobileLayout = window.matchMedia("(max-width: 1050px)");

function setMenu(open) {
    document.body.classList.toggle("mobile-nav-active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuToggle.firstElementChild.className = open ? "fas fa-times" : "fas fa-bars";
}

menuToggle.addEventListener("click", () => {
    setMenu(menuToggle.getAttribute("aria-expanded") === "false");
    if (menuToggle.getAttribute("aria-expanded") === "true") {
        document.querySelector("#navbar a").focus();
    }
});

document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        if (mobileLayout.matches) {
            setMenu(false);
            const section = document.querySelector(link.hash);
            if (section) {
                section.tabIndex = -1;
                section.focus({ preventScroll: true });
            }
        }
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuToggle.focus();
    }
});
mobileLayout.addEventListener("change", () => setMenu(false));

const themeToggle = document.getElementById("theme-toggle");
function applyTheme(dark) {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    themeToggle.firstElementChild.className = dark ? "fas fa-sun" : "fas fa-moon";
}
let savedTheme;
try { savedTheme = localStorage.getItem("portfolio-theme"); } catch {}
applyTheme(savedTheme === "dark" || (!savedTheme && matchMedia("(prefers-color-scheme: dark)").matches));
themeToggle.addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme !== "dark";
    applyTheme(dark);
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); } catch {}
});

const navLinks = [...document.querySelectorAll("#navbar a")];
function markCurrentLocation() {
    const hash = window.location.hash || "#hero";
    navLinks.forEach(link => {
        if (link.hash === hash) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
    });
}
markCurrentLocation();
window.addEventListener("hashchange", markCurrentLocation);

document.addEventListener("DOMContentLoaded", () => {
    if (!("IntersectionObserver" in window)) return;

    const targets = [
        "main .section-title", "main .card", "main .resume-item",
        "main section:not(#hero) figure", "main .container > p",
        "main .container > ul > li", ".section-visual > .content",
        "#about-content", ".footer-layout > *"
    ];
    const observer = new IntersectionObserver((entries) => {
        let delay = 0;
        // Start with the highest visible item, then follow reading order.
        entries.sort((a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top ||
            a.boundingClientRect.left - b.boundingClientRect.left
        );
        for (const { target, isIntersecting } of entries) {
            if (!isIntersecting) {
                target.classList.remove("section-entrance");
                continue;
            }
            target.style.setProperty("--entrance-delay", `${delay}ms`);
            target.classList.add("section-entrance");
            delay = Math.min(delay + 95, 285);
        }
    }, { rootMargin: "0px 0px -19% 0px" });

    document.querySelectorAll(targets.join(", ")).forEach(element => {
        if (element.parentElement.closest(targets.join(", "))) return;
        element.classList.add("scroll-reveal");
        observer.observe(element);
    });
});

const motionToggle = document.getElementById("motion-toggle");
const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");
let motionOverride;
try { motionOverride = localStorage.getItem("portfolio-motion"); } catch {}

function applyMotion() {
    const enabled = motionOverride ? motionOverride === "on" : !motionPreference.matches;
    document.documentElement.dataset.motion = enabled ? "on" : "off";
    motionToggle.setAttribute("aria-pressed", String(enabled));
    motionToggle.textContent = enabled ? "Motion on" : "Motion off";
}
applyMotion();
motionToggle.hidden = false;
motionToggle.addEventListener("click", () => {
    motionOverride = document.documentElement.dataset.motion === "on" ? "off" : "on";
    try { localStorage.setItem("portfolio-motion", motionOverride); } catch {}
    applyMotion();
});
motionPreference.addEventListener("change", applyMotion);

const scrollProgress = document.querySelector(".scroll-progress");
function updateScrollProgress() {
    const root = document.documentElement;
    const distance = root.scrollHeight - root.clientHeight;
    const progress = distance > 0 ? root.scrollTop / distance : 0;
    scrollProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
}
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
window.addEventListener("load", updateScrollProgress);
updateScrollProgress();
