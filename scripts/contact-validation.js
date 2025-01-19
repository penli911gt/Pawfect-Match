function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name) {
        alert('Please enter your name.');
        return false;
    }
    if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (!phone) {
        alert('Please enter your phone number.');
        return false;
    }
    if (!message) {
        alert('Please enter your message.');
        return false;
    }
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Attach the validateForm function to the form's submit event
document.querySelector('form').onsubmit = function() {
    return validateForm();
};
