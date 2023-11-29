fetch('../projets/info')
    .then(response => response.json())
    .then(projects => {
        const project_container = document.getElementById('project-container');
        const menu_projets = document.getElementById('dropdown-content');
        projects.forEach(project => {
            const div = document.createElement('div')
            div.classList.add('project')
            const img = new Image()
            img.src = project.image
            const h3 = document.createElement('h3')
            h3.textContent = project.name
            const p = document.createElement('p')
            p.textContent = project.description
            const a = document.createElement('a')
            a.textContent = "En savoir plus"
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(a);
            project_container.appendChild(div);

            const a_menu = document.createElement('a')
            a_menu.textContent = project.name
            menu_projets.appendChild(a_menu)
        });
    })
    .catch(error => console.error('Erreur:', error));