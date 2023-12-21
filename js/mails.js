import { Resend } from 'resend';

const resend = new Resend('re_jVHg4Xoo_Mb65sjfywpWU3yNjC5Z1QsVi');
function sendEmail() {
    let from = "AniMaGa Website";
    let to = document.getElementById('mail').value;
    let subject = "Muchas gracias por sus comentarios u opiniones en cuanto pueda le respondere de pana"
    let html = document.getElementById('html').value;

    resend.emails.send({
        from: from,
        to: to,
        subject: subject,
        html: html
    }).then(response => {
        if (response.status === 'success') {
        alert('Correo electrónico enviado con éxito');
        } else {
        alert('Ocurrió un error al enviar el correo electrónico');
        }
    }).catch(error => {
        alert('Ocurrió un error al enviar el correo electrónico');
    });
}

let button = document.getElementById('enviar-mail');
button.addEventListener('click', sendEmail);
