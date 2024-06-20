function loading() {
    fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        const tabs = document.getElementsByClassName('tabs')[0];
        const footer = document.querySelector('footer');
        data['compIUT'].forEach(comp => {
            // Créer les onglets
            const onglet = document.createElement('button');
            onglet.classList.add('tablink');
            onglet.innerText = comp.label;
            onglet.style.backgroundColor = comp.color;
            onglet.addEventListener('click', function(event) {
                openTab(event, comp.tabName);
            });
            tabs.appendChild(onglet);

            // Créer le contenu des onglets
            const containerComp = document.createElement('div');
            containerComp.id = comp.tabName;
            containerComp.classList.add('tab-content');

            const labelComp = document.createElement('h3');
            labelComp.textContent = comp.labelAvance;

            const descriptionComp = document.createElement('p');
            descriptionComp.innerHTML = comp.description;

            // Ajouter les niveaux de compétence
            const niveauxContainer = document.createElement('div');
            niveauxContainer.classList.add('niveaux-container');

            comp.niveaux.forEach(niveau => {
                const niveauDiv = document.createElement('div');
                niveauDiv.classList.add('niveau');
                niveauDiv.style.backgroundColor = niveau.color;

                const niveauTexte = document.createElement('p');

                if (niveau.degre === comp.niveauAtteint) {
                    niveauDiv.classList.add('niveau-atteint');
                    niveauTexte.textContent = `Niveau ${niveau.degre} (Atteint) : ${niveau.texte}`;

                    const justification = document.createElement('div');
                    justification.classList.add('justification');
                    justification.innerHTML = `
                        <h1>Justification du niveau ${niveau.degre}</h1>
                        <p>${comp.justification.texte}</p>
                        <p><strong>Les projets/SAE associés</strong></p>
                        <ul>
                            ${comp.justification.projet.map(projet => `<li>${projet}</li>`).join('')}
                        </ul>
                    `;
                    niveauDiv.appendChild(justification);
                } else {
                    niveauTexte.textContent = `Niveau ${niveau.degre} : ${niveau.texte}`;
                }

                niveauDiv.appendChild(niveauTexte);
                niveauxContainer.appendChild(niveauDiv);
            });

            containerComp.appendChild(labelComp);
            containerComp.appendChild(descriptionComp);
            containerComp.appendChild(niveauxContainer);

            footer.parentNode.insertBefore(containerComp, footer);
        });
        tabs.getElementsByTagName('button')[0].click();
    });  
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add('active');
}

window.addEventListener('load', loading);
