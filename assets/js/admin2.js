
var auth = firebase.auth();

  
  function btnclick() {
  auth.signOut().then(()=> {
    console.log('sign out success');
    window.location = 'index.html';
    window.alert('You are logged out successfully. In order to use this page please log in again!!');
  });
}	
//Handle Account Status
auth.onAuthStateChanged(user => {
  if(!user) {
    window.location = 'test1.html'; //If User is not logged in, redirect to login page
  }
  else{
  	document.getElementById('overlay').style.display = "block";
  }
});
