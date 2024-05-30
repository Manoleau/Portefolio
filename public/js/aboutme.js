import data from './data.json' assert { type: 'json' };
function loading() {
    const aboutme = document.getElementById('about-me');
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


    const ul = document.getElementById('professional-experience').getElementsByTagName('ul')[0];
    data["exppro"].forEach(exp => {
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        const span = document.createElement('span')
        if (exp.dateFin) {
            span.textContent = `${exp.name} (${exp.datadebut} - ${exp.datefin})`;
        } else {
            span.textContent = `${exp.name} (${exp.datadebut} - En cours...)`;

        }
        const p = document.createElement('p');
        p.textContent = exp.description;
        li.appendChild(strong);
        li.appendChild(span);
        li.appendChild(p);
        ul.appendChild(li);
    })
}
window.addEventListener('load', loading);