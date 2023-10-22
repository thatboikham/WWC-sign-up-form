const divpassword = document.getElementById("matchpass");
const password_input = document.getElementById("passwordDls");
const confirmPassword_input = document.getElementById("cfrmpassord");
const error_P = document.createElement("p");

error_P.classList.add("error");
error_P.innerHTML = "* Passwords do not match";

function checkMatchPass() {
    const firstpass = password_input.value;
    const secondPass = confirmPassword_input.value;

    if (firstpass !== secondPass) {
        if (!divpassword.contains(error_P)) {
            divpassword.appendChild(error_P);
        }
    } else {
        if (divpassword.contains(error_P)) {
            divpassword.removeChild(error_P);
        }
    }
}

password_input.addEventListener("input", checkMatchPass);
confirmPassword_input.addEventListener("input", checkMatchPass);
