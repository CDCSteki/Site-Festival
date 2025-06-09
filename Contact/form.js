function validateForm() {
    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('telError').textContent='';

    const name = document.getElementById('name').value.trim();
    const namePattern = /^[^\d]+$/;
    if (!name) {
        document.getElementById('nameError').textContent = 'Introduceţi numele.';
        isValid = false;
    }else if (!namePattern.test(name)) {
        document.getElementById('nameError').textContent = 'Numele nu poate conţine cifre.';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Introduceţi email-ul.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Introduceţi un email valid.';
        isValid = false;
    }

    const tel= document.getElementById('telefon').value.trim();
    const phonePattern = /^\d{10}$/;
    if(!tel)
    {
        document.getElementById('telError').textContent = 'Intoduceţi numărul de telefon';
        isValid = false;
    }else if(!phonePattern.test(tel)){
        document.getElementById('telError').textContent = 'Introduceţi număr de telefon valid.';
        isValid = false;
    }

    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('messageError').textContent = 'Introduceţi mesajul.';
        isValid = false;
    }

    if (isValid) {
        alert('Formularul a fost trimis!');
        document.getElementById('contactForm').reset();
    }
}