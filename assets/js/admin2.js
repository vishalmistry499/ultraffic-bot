

if(btnlogout) 
{
    btnlogout.addEventListener('click', e => {

    	window.alert('ehef');

    	firebase.auth().signOut().then(() => {
  // Sign-out successful
  window.open('test1.html', target="_self");.
}).catch((error) => {
  // An error happened.
});





    });
}

var db = firebase.firestore();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
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
        }

        else
        {
                   console.log("NOT ADMIN");
                   alert("You are not Admin. Only Admins are allowed to Login.\nUse AndroidApp instead");
                   window.open('test1.html', target="_self");              
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});




      // ...
    } else {
      // User is signed out
      // ...
      window.open('test1.html', target="_self");  
    }
  });