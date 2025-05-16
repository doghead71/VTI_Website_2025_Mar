function createRegistration(){
    const email = document.querySelector('input[name="email"').ariaValueMax;
    const password = document.querySelector('input[name="password"]').value;

    //here you would typically send the data to your server
    console.log("email:",email);
    console.log("Password:",password);
}