const form = document.getElementById("addform");
function onSubmit(event) {
    event.preventDefault();
    const first = form.elements["first_name"].value;
    const mname = form.elements["middle_name"].value;
    const last = form.elements["last_name"].value;
    const gender = form.elements["Gender"].value;
    const tel = form.elements["phone"].value;
    const email = form.elements["Email"].value;
    const address = form.elements["Address"].value;
    


    localStorage.setItem("first",first);
    localStorage.setItem("middle",mname);
    localStorage.setItem("last",last);
    localStorage.setItem("gender",gender);
    localStorage.setItem("tel",tel);
    localStorage.setItem("email",email);
    localStorage.setItem("address",address);



    window.location.replace("cv.html")

    

}
form.addEventListener("submit",onSubmit)
