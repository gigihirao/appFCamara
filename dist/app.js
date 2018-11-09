$(document).ready( ()=> {
  //Efeito da tela inicial
  $('.lg-foodmap').delay('1000').fadeToggle('slow', 'linear');
  $('.screen-main').delay('5000').fadeIn('slow');
  $('.lg-foodmap').delay('3000').fadeOut('slow');
}

const login = document.getElementById("btn-firelogin");
const logout = document.getElementById("btn-firelogout");
const userBox = document.getElementById("user_div");
const loginBox = document.getElementById("login_div");
const userWelcome = document.getElementById("user_greeting");
const userEmail = document.getElementById("email_field");
const userPass = document.getElementById("password_field");



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    userBox.style.display = "block";
    loginBox.style.display = "none";

    let user = firebase.auth().currentUser;

    if(user != null){

      let email_id = user.email;
      userWelcome.innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    userBox.style.display = "none";
    loginBox.style.display = "block";

  }
});

login.addEventListener('click', login);
function login(){

  userEmail.value;
  userPass.value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
logout.addEventListener('click', logout);
function logout(){
  firebase.auth().signOut();
}
