let formId = (id) => document.getElementById(id);

let formClasses = (classes) => document.getElementsByClassName(classes);

let username = formId("username"),
    email = formId("email"),
    password = formId("password"),
    form = formId("form"),
    errorMsg = formClasses("error"),
    successIcon = formClasses("success-icon"),
    failureIcon = formClasses("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(username, 0, "username should not be blank");
    engine(email, 1, "email should not be blank");
    engine(password, 2, "password should not be blank");
});

let engine = (id, serial, message) => {
    if(id.value.trim() === '') {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = 1;
        successIcon[serial].style.opacity = 0;
    } else {
        errorMsg[serial].innerHTML = "";
        successIcon[serial].style.opacity = 1;
        failureIcon[serial].style.opacity = 0;
    }
};
