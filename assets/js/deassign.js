var db = firebase.firestore();

var emailua=[]

var emaildd = document.getElementById("emailid");
var junctiondd = document.getElementById("junction");

db.collection("assignedpos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        aa=doc.data();
        temp=aa.email;
        if(!emailua.includes(temp))
        {
        emailua.push(aa.email);
         var opt = aa.email;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        emaildd.appendChild(el);
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());


        }
       

        
    });
});



var junctions=[]
var junctiondd = document.getElementById("junction");


function btnclick() {

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

            var selectedemail=document.getElementById("emailid").value;
    var selectedjunction=document.getElementById("junction").value;

    db.collection("assignedpos").doc(selectedjunction).delete().then(() => {

          
var selectedemail1=document.getElementById("emailid").value;

var length = junctiondd.options.length;
for (i = length-1; i >= 0; i--) {
  junctiondd.options[i] = null;
}

var opt = "Select Junction";
var el = document.createElement("option");
el.textContent = opt;
el.value = opt;
junctiondd.appendChild(el);

db.collection("assignedpos").where("email", "==", selectedemail1)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            y=doc.data()
            temp=y.address;

            var opt1 = temp;
            var e11 = document.createElement("option");
            e11.textContent = opt1;
            e11.value = opt1;
            junctiondd.appendChild(e11);

            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
        document.getElementById('demo').innerHTML = "Error getting document";
    });


        console.log("Document successfully deleted!");
        document.getElementById('demo').innerHTML = "Document successfully deleted";
    }).catch((error) => {
        console.error("Error removing document: ", error);
        document.getElementById('demo').innerHTML = "Error removing document";
    });

          
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
////////////////////
    
/////////

    
}


function myFunction() {
  
var selectedemail1=document.getElementById("emailid").value;
number=0;

var length = junctiondd.options.length;
for (i = length-1; i >= 0; i--) {
  junctiondd.options[i] = null;
}

var opt = "Select Junction";
var el = document.createElement("option");
el.textContent = opt;
el.value = opt;
junctiondd.appendChild(el);

db.collection("assignedpos").where("email", "==", selectedemail1)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            number=1;
            y=doc.data()
            temp=y.address;

            var opt1 = temp;
            var e11 = document.createElement("option");
            e11.textContent = opt1;
            e11.value = opt1;
            junctiondd.appendChild(e11);
            console.log(doc.id, " => ", doc.data());
            
            

        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });





}

////////////////////left if user has no assigned terminal
///////////////////left if user ke sare assigned delete kie fir condition handling
