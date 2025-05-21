function createRegistration (){
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if(!email.includes("@")){
        alert("Please enter a valid email address.");
        return;
    }

    if(!email.includes(".")){
        alert("Please enter a valid email address.");
        return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
}
