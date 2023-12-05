const loadingScreen = document.getElementById('loading-screen');
function hideLoadingScreen() {
    loadingScreen.style.display = 'none';
}
function loading(){
    fetch('/competences/info')
    .then(response => response.json())
    .then(comps => {
        const skills = document.getElementById('skills-container');
        const dejadanshtml = []
        comps.forEach(comp => {
            if(dejadanshtml.includes(comp.nomType)){
                const skill_category = document.getElementById("category-"+comp.nomType);
                const ul = skill_category.getElementsByClassName('sub-skills')[0];
                const li = document.createElement('li');
                const img_comp = new Image();
                img_comp.src = comp.image
                img_comp.alt = comp.nom
                li.appendChild(img_comp);
                const skill_name = document.createElement("div");
                skill_name.classList.add('skill-name')
                skill_name.textContent = comp.nom
                li.appendChild(skill_name)
                const span = document.createElement('span');
                span.classList.add('level');
                if(comp.niveau == 1){
                    span.classList.add('beginner');
                    span.textContent = "Débutant";
                } else if (comp.niveau == 2){
                    span.classList.add('intermediate');
                    span.textContent = "Intermédiaire";
                } else {
                    span.classList.add('advanced');
                    span.textContent = "Confirmé";
                }
                li.appendChild(span);
                ul.appendChild(li);
                skill_category.appendChild(ul);
            } else {
                const skill_category = document.createElement('div')
                skill_category.classList.add('skill-category');
                skill_category.id = "category-"+comp.nomType
                const img_type = new Image();
                img_type.src = comp.imageType;
                img_type.alt = comp.nomType;
                skill_category.appendChild(img_type);
    
                const h3 = document.createElement('h3');
                h3.textContent = comp.nomType;
                skill_category.appendChild(h3);
                
                const ul = document.createElement('ul');
                ul.classList.add('sub-skills');
                const li = document.createElement('li');
                const img_comp = new Image();
                img_comp.src = comp.image
                img_comp.alt = comp.nom
                li.appendChild(img_comp);
                const skill_name = document.createElement("div");
                skill_name.classList.add('skill-name')
                skill_name.textContent = comp.nom
                li.appendChild(skill_name)
                const span = document.createElement('span');
                span.classList.add('level');
                if(comp.niveau == 1){
                    span.classList.add('beginner');
                    span.textContent = "Débutant";
                } else if (comp.niveau == 2){
                    span.classList.add('intermediate');
                    span.textContent = "Intermédiaire";
                } else {
                    span.classList.add('advanced');
                    span.textContent = "Confirmé";
                }
                li.appendChild(span);
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
                div_projet.classList.add('projet')
                const img = new Image()
                img.src = project.image;
                img.alt = project.name;
                div_projet.appendChild(img)
                const span = document.createElement('span');
                span.textContent = project.name;
                div_projet.appendChild(span)
                projet_container.appendChild(div_projet)
    
                const a_menu = document.createElement('a')
                a_menu.textContent = project.name
                menu_projets.appendChild(a_menu)
            });
        })
        .catch(error => console.error('Erreur:', error));
    
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
    
    hideLoadingScreen()
}

window.addEventListener('load', loading);
