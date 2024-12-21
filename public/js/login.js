function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = JSON.parse(localStorage.getItem(email));
    if (user !== null && user.password == password) {
        window.location.href = "/public/html/userpage.html";
        localStorage.setItem('actual_user', user.username);
    }
    else alert('No hi ha cap compte registrat amb aquest correu electrònic.');
}