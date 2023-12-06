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