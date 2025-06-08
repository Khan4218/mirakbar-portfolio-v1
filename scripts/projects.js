// Project data
const projects = [
  {
    name: "Chef Claude – AI Recipe Generator",
    description: "Generates custom recipes using AI based on ingredients entered by the user.",
    tech: "React, Hugging Face API, Markdown, CSS",
    live: "https://akbar-chef-claude-project-3.netlify.app/",
    github: "https://github.com/Khan4218/Chef-Claude-project-3"
  },
  {
    name: "React Meme Generator",
    description: "A fun meme generator app that fetches meme images and lets users add custom text.",
    tech: "React, useState, useEffect, API, CSS",
    live: "https://react-meme-generator-akbar.netlify.app/",
    github: "https://github.com/Khan4218/React-Meme-Generator-project-4"
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

// Render React project cards into container
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

// Setup scroll button behavior
function setupScrollButton() {
  const scrollArrow = document.getElementById('scroll-arrow');
  const reactSection = document.querySelector('.react-section');

  if (!scrollArrow) {
    console.warn('scroll-arrow element not found!');
    return;
  }

  scrollArrow.style.display = 'flex'; // ensure visible on load (flex, not block)

  scrollArrow.addEventListener('click', () => {
    if (reactSection) {
      const offset = 100; // pixels to scroll further down, adjust as needed
      const topPos = reactSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPos + offset,
        behavior: 'smooth'
      });

    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY < 200) {
      scrollArrow.style.display = 'flex'; // show again when near top
    } else {
      scrollArrow.style.display = 'none'; // hide when scrolled down
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupScrollButton();
});
