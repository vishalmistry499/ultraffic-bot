
var auth = firebase.auth();
var db = firebase.firestore();


  
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

    var uid = user.uid;
console.log(uid);

var docRef = db.collection("users").doc(uid);

docRef.get().then((doc) => {
if (doc.exists) {
  aa=doc.data();
  isAdmin=aa.isAdmin;

  if(isAdmin=="1")
  {
      console.log("ADMIN");
      document.getElementById('overlay').style.display = "block";
      document.getElementById('username').innerHTML = user.email;
  }

  else
  {
             console.log("NOT ADMIN");
             firebase.auth().signOut();
             alert("You are not Admin. Only Admins are allowed to Login.\nUse AndroidApp instead.");
             window.open('test1.html', target="_self");  
              
  }
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}).catch((error) => {
console.log("Error getting document:", error);
});

    
       
  }
});
