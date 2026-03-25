function validateForm() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let successMsg = document.getElementById('successMsg');

    nameError.textContent = "";
    emailError.textContent = "";
    successMsg.style.display = "none";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    if (isValid) {
        successMsg.style.display = "block";
    }

    return false; // prevent page reload
}