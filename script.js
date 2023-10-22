const divpassword = document.getElementById("matchpass")
const signUP_button = document.querySelector('[type = "submit"]')
console.log(signUP_button)
const password_input = document.getElementById("passwordDls")
const confirmPassword_input = document.getElementById("cfrmpassord")
const danger_P = document.createElement("p")

danger_P.classList.add("error")
danger_P.innerHTML = "* passwords do not match"

function checkMatchPass(){
    const firstpass = password_input.value;
    const secondPass = confirmPassword_input.value;
    if(firstpass !== secondPass){
        divpassword.appendChild(danger_P)
    }
}
signUP_button.addEventListener("click", checkMatchPass)