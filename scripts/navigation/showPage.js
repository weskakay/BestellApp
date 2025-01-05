function showPage(event, pageId) {
    event.preventDefault();
    const pageContent = document.getElementById('page-content');
    if (pageContents[pageId]) {
        pageContent.innerHTML = pageContents[pageId];
        pageContent.style.display = 'block';
        initializePage(pageId);
    } else {
        pageContent.innerHTML = `<h2>Seite nicht gefunden</h2>`;
    }
    pageContent.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function initializePage(pageId) {
    if (pageId === 'kundenservice') {
        initializeChatbot();
    } else if (pageId === 'geschaeftEmpfehlen') {
        const recommendForm = document.getElementById('recommend-form');
        recommendForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const message = document.getElementById('recommend-message');
            message.innerText = 'Vielen Dank für Ihre Empfehlung!';
            message.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    } else if (pageId === 'geschaeftAnmelden') {
        const registerForm = document.getElementById('register-form');
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const registerMessage = document.getElementById('register-message');
            registerMessage.innerText = 'Vielen Dank für Ihre Anmeldung!';
            registerMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    } else if (pageId === 'fahrerWerden') {
        initializeDriverForm();
    } else if (pageId === 'jobs') {
        initializeJobApplications();
    }
}
