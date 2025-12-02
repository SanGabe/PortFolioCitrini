// Este arquivo contém funcionalidades interativas da página, como manipulação do DOM e eventos.

document.addEventListener('DOMContentLoaded', () => {
    // Função para carregar projetos do arquivo JSON
    const loadProjects = async () => {
        try {
            const response = await fetch('src/data/projects.json');
            const projects = await response.json();
            const projectsContainer = document.querySelector('.projects .grid');

            projects.forEach(project => {
                const projectCard = document.createElement('article');
                projectCard.classList.add('card');
                projectCard.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a class="btn" href="${project.link}">Ver projeto</a>
                `;
                projectsContainer.appendChild(projectCard);
            });
        } catch (error) {
            console.error('Erro ao carregar projetos:', error);
        }
    };

    loadProjects();
});