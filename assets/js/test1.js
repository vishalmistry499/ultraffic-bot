
  
var db = firebase.firestore();

const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const btnLogin = document.getElementById('login');

if(btnLogin) {
    btnLogin.addEventListener('click', e => {
      const email = txtEmail.value;
      const pass = txtPassword.value;

      firebase.auth().signInWithEmailAndPassword(email,pass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
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
              window.open('admin.html', target="_self"); 
              console.log("ADMIN");
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
  
  
  
  
        // ...
      } else {
        // User is signed out
        // ...
      }
    console.log("HELLO");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("ERROR "+errorMessage+"\nPlease Try Again Later");
  });

      

    });
    }

  
  /*
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
            //window.open('index.html', target="_self"); 
            console.log("ADMIN");
        }

        else
        {
                   console.log("NOT ADMIN");
                   firebase.auth().signOut();
                   alert("You are not Admin. Only Admins are allowed to Login.\nUse AndroidApp instead");
                   window.open('index.html', target="_self");  
                    
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
    }
  });
  */