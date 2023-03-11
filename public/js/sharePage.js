const submitServiceFormHandler = async (event) => {
    event.preventDefault();
    
    const applicationLogin = document.querySelector('#application-login').value.trim();
    const applicationPassword = document.querySelector('#application-password').value.trim();
    const streamService = document.querySelector('#stream-service').value.trim();
    
    
    if (applicationLogin && applicationPassword && streamService) {
        const response = await fetch('/api/sharePage/', {
        method: 'POST',
        body: JSON.stringify({ applicationLogin, applicationPassword, streamService }),
        headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/profileMatching');
        } else {
            alert(response.statusText);
        }
    }
    };





document
.querySelector('.submit-sharing')
.addEventListener('submit', submitServiceFormHandler);