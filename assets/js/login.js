const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const btnLogin = document.getElementById('login');

if(btnLogin) {
    btnLogin.addEventListener('click', e => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth  = firebase.auth();
  
      const promise = auth.signInWithEmailAndPassword(email, pass);
      
      promise.catch(e => console.log(e.message)); 
    });
    }

firebase.auth().onAuthStateChanged( firebaseUser => {
   if(firebaseUser) {
        console.log('logged in'); 
        window.open('index.html', target="_self");        
    } else {
        console.log('not logged in');
    }
});