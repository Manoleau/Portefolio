import data from './data.json' assert { type: 'json' };
function loading() {
    const project_container = document.getElementById('project-container');
    data['projets'].forEach(project => {
        const div = document.createElement('div')
        const a = document.createElement('a');
        const img = new Image()
        const h3 = document.createElement('h3')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')

        div.classList.add('project')
        if (project.ready) {
            div.classList.add('ready')
        } else {
            div.classList.add('notready')
        }

        a.classList.add('git')
        a.textContent = "Git"
        if (project.git) {
            a.href = project.git
        }

        img.src = project.img

        h3.textContent = project.name

        var description = project.description.split('|');
        p1.textContent = description[0];
        p2.textContent = description[1];
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(a);
        project_container.appendChild(div);

    });
}
window.addEventListener('load', loading);
