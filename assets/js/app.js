
const firebaseConfig = {
    apiKey: "AIzaSyA9w-PaSlnkMhgUiDZYU6tr-5SJW-TjAiU",
    authDomain: "ultraffic-266da.firebaseapp.com",
    databaseURL: "https://ultraffic-266da-default-rtdb.firebaseio.com",
    projectId: "ultraffic-266da",
    storageBucket: "ultraffic-266da.appspot.com",
    messagingSenderId: "988610068177",
    appId: "1:988610068177:web:8aabeeb70aa88bdd470ff0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  const btnLogout = document.getElementById('logout');

  if(btnLogout) {
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    window.open('login.html', target="_self");  
  });
}


