function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = JSON.parse(localStorage.getItem(`${email}_pw`));
    if (user && user.password == password) window.location.href = "/public/html/userpage.html";
    else alert('No hi ha cap compte registrat amb aquest correu electrònic.');
}