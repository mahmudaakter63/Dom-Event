const Form = document.querySelector("form");
const Email = document.querySelector("#email");
const Password = document.querySelector("#password");
// console.log(Email);


Form.addEventListener("submit",formHandler);
function formHandler(e) {
    e.preventDefault();
    console.log(e);
    

    const formInfo = {
        Email:Email.value,
        Password:Password.value,}
        
    

        console.log(formInfo)
        Email.value ="",
        Password.value ="",
        console.log(formInfo)

    }


