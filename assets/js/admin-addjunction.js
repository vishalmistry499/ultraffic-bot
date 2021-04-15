
var db = firebase.firestore();

const junctionName = document.getElementById('junctionName');
const address1 = document.getElementById('address');
const btnAdd = document.getElementById('btnAdd'); 



if(btnAdd) 
{
    btnAdd.addEventListener('click', e => {
      const name1 = junctionName.value;
      const address = address1.value;


          var user = firebase.auth().currentUser;

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

               
    if (document.getElementById('address').value != ""){

db.collection("trafficsignals").doc(name1).set({
    name: name1,
    address: address
})
.then(() => {
    console.log("Junction "+name1+"Written successfully");
    document.getElementById('demo').innerHTML = "Written successfully "; //write to para
})
.catch((error) => {
    console.error("Error writing document: ", error);
        document.getElementById('demo').innerHTML = "Error writing document";
});

}
else {
    alert('name and address both are required');
}
          
          }
  
          else
          {
                     console.log("NOT ADMIN");
                     firebase.auth().signOut();
                     window.alert("You are not Admin. Only Admins are allowed to Login.\nUse AndroidApp instead.");
                     window.close();
                      
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
}


function addjunction(){
  



}