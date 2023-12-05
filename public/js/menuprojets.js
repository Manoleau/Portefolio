fetch('projets/info')
    .then(response => response.json())
    .then(projects => {
        const menu_projets = document.getElementById('dropdown-content');
        projects.forEach(project => {
            const a_menu = document.createElement('a')
            a_menu.textContent = project.name
            menu_projets.appendChild(a_menu)
        });
    }).catch(error => console.error('Erreur:', error));