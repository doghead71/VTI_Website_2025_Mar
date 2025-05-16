function CreateRegister() {
    alert("About to create registeration form!");

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // here you would typically send the data to your server
    console.log("Email: ", email);
    console.log("Password: ", password);
}