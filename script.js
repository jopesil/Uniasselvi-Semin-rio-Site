const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signUp');

signUpButton.addEventListener('click', ()=>{

    signInForm.style.display="none";
    signUpForm.style.display="block";
})

signInButton.addEventListener('click', ()=>{

    signUpForm.style.display="none";
    signInForm.style.display="block";

})
