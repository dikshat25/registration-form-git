function validateForm() {
    let name = document.getElementById('name').value;

    if (name === "") {
        alert("Name is required");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
