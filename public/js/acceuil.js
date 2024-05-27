import data from './data.json' assert { type: 'json' };

function loading() {

    const skills = document.getElementById('skills-container');
    const aboutme = document.getElementById('about-me');
    const projet_container = document.getElementById('projet-container');

    const p_description = document.createElement('p');
    const img_moi = new Image();

    img_moi.src = data["me"]["img"]
    img_moi.alt = "Emmanuel Ardoin"

    p_description.innerHTML = data["me"]["description"]
    aboutme.appendChild(img_moi)
    aboutme.appendChild(p_description);
    data["skills"].forEach(skill => {
        const skill_category = document.createElement('div')
        const img_type = new Image();
        const p = document.createElement('p');
        const ul = document.createElement('ul');
        
        skill_category.classList.add('skill-category');

        img_type.src = skill.img;
        img_type.alt = skill.name;

        p.textContent = skill.name;

        skill_category.appendChild(img_type);
        skill_category.appendChild(p);

        ul.classList.add('sub-skills');

        skill.data.forEach(sub_skill => {
            const sub_skill_name = document.createElement("div");
            const li = document.createElement('li');
            const img_comp = new Image();
            const span = document.createElement('span');

            span.classList.add('level');
            if (sub_skill.niveau == 1) {
                span.classList.add('beginner');
                span.textContent = "Débutant";
            } else if (sub_skill.niveau == 2) {
                span.classList.add('intermediate');
                span.textContent = "Intermédiaire";
            } else {
                span.classList.add('advanced');
                span.textContent = "Confirmé";
            }
    
            img_comp.src = sub_skill.img;
            img_comp.alt = sub_skill.name;

            const span2 = document.createElement('span');
            span2.textContent = sub_skill.name
    
            sub_skill_name.classList.add('skill-name');
    
            sub_skill_name.appendChild(span);
            li.appendChild(img_comp);
            li.appendChild(span2);
            li.appendChild(sub_skill_name);
            ul.appendChild(li);
        });

        skill_category.appendChild(ul);
        skills.appendChild(skill_category);
    })
    
    data["projets"].forEach(projet => {
        const div_projet = document.createElement('div');
        const img = new Image();
        const a = document.createElement('a');

        div_projet.classList.add('projet');

        if (projet.git) {
            a.href = projet.git;
        }
        img.src = projet.img;
        img.alt = projet.name;
        a.appendChild(img);
        div_projet.appendChild(a);
        const span = document.createElement('span');
        span.textContent = projet.name;
        div_projet.appendChild(span)
        projet_container.appendChild(div_projet)
    })

    // fetch('/projets/info')
    //     .then(response => response.json())
    //     .then(projects => {
    //         
    //     })
    //     .catch(error => console.error('Erreur:', error));
}

window.addEventListener('load', loading);
