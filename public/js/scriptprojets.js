const loadingScreen = document.getElementById('loading-screen');
function hideLoadingScreen() {
    loadingScreen.style.display = 'none';
}
function loading(){
    fetch('/projets/info')
    .then(response => response.json())
    .then(projects => {
        const project_container = document.getElementById('project-container');
        const menu_projets = document.getElementById('dropdown-content');
        projects.forEach(project => {
            const div = document.createElement('div')
            div.classList.add('project')
            if (project.ready){
                div.classList.add('ready')
            } else {
                div.classList.add('notready')
            }
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
        hideLoadingScreen();
    })
    .catch(error => {
        console.error('Erreur:', error)
        hideLoadingScreen();
    });
}
window.addEventListener('load', loading);