function validateForm() {
    var email = document.forms["form"]["email"].value;
    var password = document.forms["form"]["password"].value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailErr").innerHTML = "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("emailErr").innerHTML = "";
    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordErr").innerHTML = "Password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, and one number.";
        return false;
    } else {
        document.getElementById("passwordErr").innerHTML = "";
    }

    return true;
}
