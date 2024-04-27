function changePassword() {
    const passwordRequiredError = document.getElementById("password-required-error");
    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (currentPassword.trim() === "") {
        document.getElementById("password-required-error").style.display = "block";
        return false;
    } else {
        document.getElementById("password-required-error").style.display = "none";
    }
    
    if (newPassword !== confirmPassword) {
        document.getElementById("password-doesnt-match-error").style.display = "block";
        return;
    } else {
        document.getElementById("password-doesnt-match-error").style.display = "none";
    }

    firebase.auth().currentUser.updatePassword(newPassword)
        .then(() => {
            alert("Senha alterada com sucesso.");
        })
        .catch(error => {
            document.getElementById("error-message").innerText = error.message;
        });
}

function toggleButtonsDisable() {
    const passwordValid = isPasswordValid();
    const confirmPasswordValid = isConfirmPasswordValid();
    document.getElementById("change-password-button").disabled = !passwordValid || !confirmPasswordValid;
}

function isPasswordValid() {
    const newPassword = document.getElementById("newPassword").value;
    const passwordMinLengthError = document.getElementById("password-min-length-error");

    if (newPassword.length < 6) {
        passwordMinLengthError.style.display = "block";
        return false;
    } else {
        passwordMinLengthError.style.display = "none";
    }

    return newPassword.trim() !== "";
}

function isConfirmPasswordValid() {
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword && confirmPassword.trim() !== "") {
        document.getElementById("password-doesnt-match-error").style.display = "block";
    } else {
        document.getElementById("password-doesnt-match-error").style.display = "none";
    }

    return newPassword === confirmPassword;
}

document.addEventListener("DOMContentLoaded", function() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        input.addEventListener("input", toggleButtonsDisable);
    });
});
