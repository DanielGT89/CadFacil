firebase.auth().onAuthStateChanged(user =>
{
    if (user) {
        window.location.href = "index.html";
    }
})

function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
} 
function login (){

    showcarregamento();
    
    firebase.auth().signInWithEmailAndPassword(form.email().value,form.password().value).then(response => {
        hidecarregamento();
        window.location.href="index.html";
    }).catch(error => {
        hidecarregamento();
       alert(getErrorMessage(error));

    });
          
   
}
function getErrorMessage(error) {
    if (error.code == "auth/invalid-credential") {
        return "Usuário Não Encontrado";
     }
     return  error.message;

}

function register(){
    window.location.href="cadastra.html";

    
}
function recoverPassword() {
    showcarregamento();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hidecarregamento();
        alert('Email enviado com sucesso');
    }).catch(error => {
        hidecarregamento();
        alert(getErrorMessage(error));
    });
}
function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    return form.password().value ? true : false;
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
} 