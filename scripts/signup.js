const haveacc=document.getElementById('haveacc');
const loginform=document.getElementById('loginform');
const signupform=document.getElementById('signupform')
const register=document.getElementById('register')
const status=document.getElementById('status')
function show() {
    loginform.style.display='block';
    signupform.style.display="none";
    register.innerHTML='Login'
    status.innerHTML='Home-Login'
    
}
function hide(){
    loginform.style.display="none";
    signupform.style.display="block";
    register.innerHTML='Register'
    status.innerHTML='Home-Register'
}
