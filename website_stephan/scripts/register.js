function createRegister(){
    
    const email =  document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    //validation
    if (!email || !password){
        alert("Please fill in all the credentials");
        return;
    }

    if (password.length < 8){
        alert("Password must be 8 characters long");
        return;
    }

    if(!email.includes("@")){
        alert("Please enter a valid email");
        return;
    }

    if(!email.includes(".")){
        alert("Please enter a valid email");
        return;
    }

    const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)){
        alert("Password must contain at least one upper case letter, one lowercase, one number and one character");
        return;
    }

    // Here you
    console.log("Email: ", email);
    console.log("Password: ", password);
    
}