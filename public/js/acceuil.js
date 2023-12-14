function loading() {
    fetch('/hero/info?id=1')
        .then(response => response.json())
        .then(hero => {
            const herodiv = document.getElementById('hero')
            const h1_hero = document.createElement('h1')
            const p_hero = document.createElement('p')
            h1_hero.textContent = `${hero[0].prenom} ${hero[0].nom}`
            p_hero.textContent = `${hero[0].age} ans . ${hero[0].nationalite} . ${hero[0].personnalite} . ${hero[0].profession}`
            herodiv.appendChild(h1_hero)
            herodiv.appendChild(p_hero)

            const about = document.getElementById('about-me')
            const img = document.createElement('img')
        if(hero[0].image){
            img.src = hero[0].image
        } else {
            img.src = "img/3135715.png"
        }
        about.appendChild(img)
            const description = hero[0].description.split("|")
            for (let i = 0; i < description.length; i++) {
                let p = document.createElement('p')
                p.textContent = description[i]
                about.appendChild(p)
            }
        })
        .catch(error => console.error('Erreur:', error));
    fetch('/competences/info')
        .then(response => response.json())
        .then(comps => {
            const skills = document.getElementById('skills-container');
            const dejadanshtml = []
            comps.forEach(comp => {
                const li = document.createElement('li');
                const img_comp = new Image();
                const a = document.createElement('a');
                a.href = comp.url

                img_comp.src = comp.image
                img_comp.alt = comp.nom
                a.appendChild(img_comp);
                const skill_name = document.createElement("div");
                skill_name.classList.add('skill-name')
                skill_name.textContent = comp.nom
                a.appendChild(skill_name)
                const span = document.createElement('span');
                span.classList.add('level');
                if (comp.niveau == 1) {
                    span.classList.add('beginner');
                    span.textContent = "Débutant";
                } else if (comp.niveau == 2) {
                    span.classList.add('intermediate');
                    span.textContent = "Intermédiaire";
                } else {
                    span.classList.add('advanced');
                    span.textContent = "Confirmé";
                }
                a.appendChild(span);
                li.appendChild(a);
                if (dejadanshtml.includes(comp.nomType)) {
                    const skill_category = document.getElementById("category-" + comp.nomType);
                    const ul = skill_category.getElementsByClassName('sub-skills')[0];
                    ul.appendChild(li);
                    skill_category.appendChild(ul);
                } else {
                    const skill_category = document.createElement('div')
                    skill_category.classList.add('skill-category');
                    skill_category.id = "category-" + comp.nomType
                    const img_type = new Image();
                    img_type.src = comp.imageType;
                    img_type.alt = comp.nomType;
                    skill_category.appendChild(img_type);

                    const p = document.createElement('p');
                    p.textContent = comp.nomType;
                    skill_category.appendChild(p);

                    const ul = document.createElement('ul');
                    ul.classList.add('sub-skills');
                    ul.appendChild(li);

                    skill_category.appendChild(ul);
                    skills.appendChild(skill_category)
                    dejadanshtml.push(comp.nomType)

                }
            });
        })
        .catch(error => console.error('Erreur:', error));

    fetch('/projets/info')
        .then(response => response.json())
        .then(projects => {
            const menu_projets = document.getElementById('dropdown-content');
            const projet_container = document.getElementById('projet-container');
            projects.forEach(project => {
                const div_projet = document.createElement('div');
                div_projet.classList.add('projet');
                const img = new Image();
                const a = document.createElement('a');
                if (project.git) {
                    a.href = project.git;
                }
                img.src = project.image;
                img.alt = project.name;
                a.appendChild(img);
                div_projet.appendChild(a);
                const span = document.createElement('span');
                span.textContent = project.name;
                div_projet.appendChild(span)
                projet_container.appendChild(div_projet)

                const a_menu = document.createElement('a')
                if (project.git) {
                    a_menu.href = project.git;
                }
                a_menu.textContent = project.name
                menu_projets.appendChild(a_menu)
            });
        })
        .catch(error => console.error('Erreur:', error));
}

window.addEventListener('load', loading);
