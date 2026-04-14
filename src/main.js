import '../styles/main.less';
document.addEventListener("DOMContentLoaded", () => {
    const myForm = document.getElementById("commentForm");
    if (!myForm) return;

    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");

    const isEmptyRegex = /^\s*$/;
    const isValidEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidPhoneRegex = /^\d{8,10}$/;

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        nameError.style.display = "none";
        if (isEmptyRegex.test(nameInput.value)) {
            nameError.style.display = "block";
            isValid = false;
        }

        emailError.style.display = "none";
        if (!isValidEmailRegex.test(emailInput.value)) {
            emailError.style.display = "block";
            isValid = false;
        }

        phoneError.style.display = "none";
        if (!isValidPhoneRegex.test(phoneInput.value)) {
            phoneError.style.display = "block";
            isValid = false;
        }

        if (isValid) {
            alert("¡Registro enviado exitosamente!");
            myForm.reset();
        }
    });
});