// Project data
const projects = [
  {
    name: "Chef Claude – AI Recipe Generator",
    description: "Generates custom recipes using AI based on ingredients entered by the user.",
    tech: "React, Hugging Face API, Markdown, CSS",
    live: "https://akbar-project-3-chef-claude.netlify.app",
    github: "https://github.com/Khan4218/Chef-Claude-project-3"
  },
  {
    name: "React Travel Journal",
    description: "A simple React-based static travel journal to demonstrate reusable components and data mapping.",
    tech: "React, Props, JSX, CSS",
    live: "https://akbar-react-project-2.netlify.app/",
    github: "https://github.com/Khan4218/React-project-2"
  },
  {
    name: "React Static Page",
    description: "An early learning project focused on JSX, React Fragments, and component basics.",
    tech: "React, Vite, JSX, CSS",
    live: "https://akbar-simple-react-project-1.netlify.app/",
    github: "https://github.com/Khan4218/React-project1"
  }
];

// Render project cards into container
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  projects.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
          <h3>${proj.name}</h3>
          <p>${proj.description}</p>
          <p><strong>Tech Stack:</strong> ${proj.tech}</p>
          <p>
            ${proj.live ? `<a href="${proj.live}" target="_blank" rel="noopener noreferrer">🔗 Live Demo</a> | ` : ""}
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
          </p>
        `;

    container.appendChild(card);
  });
}

// Scroll to projects section when arrow clicked or keyboard "Enter"
function setupScrollIndicator() {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const reactSection = document.querySelector(".react-section");

  function scrollToProjects() {
    if (reactSection) {
      reactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  scrollIndicator.addEventListener("click", scrollToProjects);
  scrollIndicator.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      scrollToProjects();
      e.preventDefault();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupScrollIndicator();
});

document.getElementById('scroll-arrow').addEventListener('click', () => {
  const reactSection = document.querySelector('.react-section');
  if (reactSection) {
    reactSection.scrollIntoView({ behavior: 'smooth' });
  }
});
