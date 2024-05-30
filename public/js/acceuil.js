import data from './data.json' assert { type: 'json' };

function loading() {

    const aboutme = document.getElementById('about-me');

    const skills = document.getElementById('skills');
    const filter = skills.getElementsByClassName('filters')[0];

    const allFilter = document.createElement('button');
    allFilter.classList.add('filter-button');
    allFilter.setAttribute('data-type', 'all');
    allFilter.textContent = "Tous";

    allFilter.addEventListener('click', () => {
        filterSkills('all');
    });

    const skillsGrid = skills.getElementsByClassName('skills-grid')[0];


    const projet_container = document.getElementById('projet-container');

    const img_moi = new Image();

    img_moi.src = data["me"]["img"]
    img_moi.alt = "Emmanuel Ardoin"

    aboutme.appendChild(img_moi)
    let description = data["me"]["description"].split('|');
    description.forEach(element => {
        const p = document.createElement('p');
        p.textContent = element;
        aboutme.appendChild(p);
    })
    
    const typeDejaMis = [];
    data["skills"].forEach(skill => {
        if (!typeDejaMis.includes(skill.name)) {
            const typeFilter = document.createElement('button');
            typeFilter.classList.add('filter-button');
            typeFilter.setAttribute('data-type', skill.name);
            typeFilter.textContent = skill.name;
            typeFilter.addEventListener('click', () => {
                filterSkills(skill.name);
            });
            filter.appendChild(typeFilter);
            typeDejaMis.push(skill.name);
        }

        skill.data.forEach(sub_skill => {
            const sub_skill_name = document.createElement("div");
            const img_comp = new Image();
            const spanLevel = document.createElement('span');
            const spanName = document.createElement('span');

            sub_skill_name.classList.add('skill');
            sub_skill_name.classList.add(skill.name);
            sub_skill_name.setAttribute('data-level', `${sub_skill.niveau}`)
            
            spanName.textContent = sub_skill.name

            spanLevel.classList.add('level');
            if (sub_skill.niveau == 1) {
                spanLevel.textContent = "Débutant";
                sub_skill_name.setAttribute('title', `Type de compétence: ${skill.name}, Niveau: Débutant`);
            } else if (sub_skill.niveau == 2) {
                spanLevel.textContent = "Intermédiaire";
                sub_skill_name.setAttribute('title', `Type de compétence: ${skill.name}, Niveau: Intermédiaire`);
            } else {
                spanLevel.textContent = "Confirmé";
                sub_skill_name.setAttribute('title', `Type de compétence: ${skill.name}, Niveau: Confirmé`);
            }
    
            img_comp.src = sub_skill.img;
            img_comp.alt = sub_skill.name;
    
            sub_skill_name.appendChild(img_comp);
            sub_skill_name.appendChild(spanName);
            sub_skill_name.appendChild(spanLevel);
            skillsGrid.appendChild(sub_skill_name)
        });



    })
    filter.appendChild(allFilter);

    
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
    function filterSkills(type) {
        const skills = document.querySelectorAll('.skill');     

        skills.forEach(skill => {
            if (type === 'all' || skill.classList.contains(type)) {
                skill.style.display = 'flex';
            } else {
                skill.style.display = 'none';
            }
        });
    }
}

fetch('/contacts/info')
    .then(response => response.json())
    .then(contacts => {
        const footer = document.getElementsByTagName('footer')[0];
        contacts.forEach(contact => {
            const a = document.createElement('a');
            a.href = contact.lien
            a.title = contact.nom
            a.target = "_blank"
            const img = new Image()
            img.src = contact.image
            img.alt = contact.nom
            a.appendChild(img)
            footer.appendChild(a)
        });
    })
    .catch(error => console.error('Erreur:', error));

window.addEventListener('load', loading);
