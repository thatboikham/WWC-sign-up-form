const divpassword = document.getElementById("matchpass");
const password_input = document.getElementById("passwordDls");
const confirmPassword_input = document.getElementById("cfrmpassord");
const error_P = document.createElement("p");
const borderred = document.querySelectorAll(".validate input")

error_P.classList.add("error");
error_P.innerHTML = "* Passwords do not match";

function addborderRed(){
    borderred.forEach(input => {
        input.classList.add("inputerror")
    })
}
function removeborderRed(){
    borderred.forEach(input => {
        input.classList.remove("inputerror")
    })
}

function checkMatchPass() {
    const firstpass = password_input.value;
    const secondPass = confirmPassword_input.value;

    if (firstpass !== secondPass) {
        if (!divpassword.contains(error_P)) {
            divpassword.appendChild(error_P);
            addborderRed();
        }
    } else {
        if (divpassword.contains(error_P)) {
            divpassword.removeChild(error_P);
            removeborderRed()

        }
    }
}

password_input.addEventListener("input", checkMatchPass);
confirmPassword_input.addEventListener("input", checkMatchPass);
