import { socialNetwork, dataProjects } from "./data.js";

const createProjects = () => {
  let projectContainer = document.getElementById("projects-container");

  let elements = dataProjects.map((data) => {
    let project = document.createElement("div");
    project.className += "project";
    project.innerHTML = `
  <a class="btn" href="${data.url}" target="_blank" rel="noreferrer">
    <div class="project-image-header">
      <img
        class="project-image"
        src="src/assets/img/${data.image}"
        alt="imagen del proyecto"
      />
    </div>
    <div class="project-content">
      <h3 class="project-tile">${data.title}</h3>
      <p>${data.description}</p>
    </div>
  </a>`;
    return project;
  });

  elements.map((element) => projectContainer.appendChild(element));
};

const main = () => {
  createProjects();
};

main();
