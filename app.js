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
        pubContainer.appendChild(li);
    });

    // 5. Experience Section
    const expContainer = document.getElementById("experience-content");
    portfolioData.experience.forEach(exp => {
        const div = document.createElement("div");
        div.className = "resume-item";
        
        let dutiesHtml = "<ul>";
        exp.duties.forEach(duty => {
            dutiesHtml += `<li>${duty}</li>`;
        });
        dutiesHtml += "</ul>";

        div.innerHTML = `
            <h4>${exp.title}</h4>
            <h5>${exp.date}</h5>
            <p><em>${exp.organization}</em></p>
            ${dutiesHtml}
        `;
        expContainer.appendChild(div);
    });

    // 6. Projects Section
    const projContainer = document.getElementById("projects-grid");
    portfolioData.projects.forEach(proj => {
        const div = document.createElement("div");
        div.className = "card border-top-blue";
        div.innerHTML = `
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
        `;
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
