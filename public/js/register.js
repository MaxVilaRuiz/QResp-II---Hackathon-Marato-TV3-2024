function register() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password_rep = document.getElementById('repeat-password').value;

    let existing_user = localStorage.getItem(email);
    if (existing_user) alert('Ja hi ha un usuari registrat amb aquest correu electrònic.');
    else if (password !== password_rep) alert('Les contrassenyes no coincideixen.');
    else {
        let credentials = {
            username: name,
            id: email,
            password: password
        }
        
        localStorage.setItem(credentials.id, JSON.stringify(credentials));
        window.location.href = "/public/html/userpage.html";
    }
}