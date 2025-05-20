function createRegistration(){
    alert("About to create registration form!");

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Perform validation
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if(password.length < 8){
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

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return;
    }

    // Here you would typically send the data to your server
    console.log("Email:", email);
    console.log("Password:", password);
}