const error_msg = [
    "First Name cannot be empty", 
    "Last Name cannot be empty", 
    "Looks like this is not an email", 
    "Password cannot be empty"];

const form = document.querySelector('form');
const submit_btn = document.querySelector(".submit");
const input_fields = document.querySelectorAll(".input");

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkValidInput() {
    let count = 0;
    input_fields.forEach((input) => {
        if(input.children[0].value == null || input.children[0].value == "" || input.children[0].value == undefined) {
            input.children[1].classList.remove("error-icon-active");
            input.children[2].innerText = error_msg[count];
        } else {
            input.children[1].classList.add("error-icon-active");
            input.children[2].innerText = "";
        }

        if(input.children[0].id === "email" && !validateEmail(input.children[0].value)) {
            input.children[1].classList.remove("error-icon-active");
            input.children[2].innerText = error_msg[count];
        }
        count++;
    })
}

form.addEventListener('submit', (e) => e.preventDefault());
submit_btn.addEventListener('click', checkValidInput);