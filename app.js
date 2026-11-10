// Renders data from data.js into the HTML dynamically

document.addEventListener("DOMContentLoaded", () => {
    // 1. Personal Info
    document.title = `${portfolioData.personal.name} | Academic Portfolio`;
    document.getElementById("profile-name").innerText = portfolioData.personal.name;
    document.getElementById("hero-name").innerText = portfolioData.personal.name;
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

    // 4. Publications Section
    const pubContainer = document.getElementById("pub-list");
    portfolioData.publications.forEach(pub => {
        const li = document.createElement("li");
        li.innerHTML = pub;
        const list = pub.includes("(Submitted)") ? document.getElementById("manuscript-list") : pubContainer;
        list.appendChild(li);
    });

    // 5. Experience Section
    const expContainer = document.getElementById("experience-content");
    portfolioData.experience.forEach(exp => {
        const div = document.createElement("div");
        div.className = "resume-item";

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
        expContainer.appendChild(div);
    });

    // 6. Projects Section
    const projContainer = document.getElementById("projects-grid");
    const additionalProjects = document.getElementById("additional-projects-grid");
    portfolioData.projects.forEach((proj, index) => {
        const div = document.createElement("div");
        div.className = "card border-top-blue";
        div.innerHTML = `
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
        `;
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
        const container = index < 3 ? projContainer : additionalProjects;
        container.appendChild(div);
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
const mobileLayout = window.matchMedia("(max-width: 1199px)");

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
            section.tabIndex = -1;
            section.focus({ preventScroll: true });
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
