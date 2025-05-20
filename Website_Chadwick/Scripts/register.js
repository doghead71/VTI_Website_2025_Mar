function createRegistration(){
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    //Here you would typically send the data to the server
    console.log("Email:",email);
    console.log("Password:",password);


    //perform validation
    if(!email|| !password){
        alert("Please fill in all field");
    
    }
    if(password.length <8){
        alert("Password must be at least 8 characters long");
        return;
    }
    if(!email.includes("@")){
        alert("Please enter vaid email");
        return;
    
    }
     if(!email.includes(".")){
        alert("Please enter vaid email");
        return;
    
    }
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    //here you would typically send the data to your server
    console.log("email:",email);
    console.log("Password:",password);
}