

var db = firebase.firestore();

var emailua=[]

var emaildd = document.getElementById("emailid");
var junctiondd = document.getElementById("junction");

var i=0;
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    
        x=doc.data();
        if(x.status=="1")
        {

        emailua.push(x.email);
        console.log(emailua[i]);

        var opt = emailua[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        emaildd.appendChild(el);
        i++;

        }
        
        
    });
});


var junctions=[]
var junctiondd = document.getElementById("junction");
var j=0;

db.collection("trafficsignals").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    
        x=doc.data();
        junctions.push(x.name);
        console.log(junctions[j]);
        var opt2 = junctions[j];
        var e2 = document.createElement("option");
        e2.textContent = opt2;
        e2.value = opt2;
        junctiondd.appendChild(e2);
        j++;
        
    });
});

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

    var docRef = db.collection("assignedpos").doc(selectedjunction);

docRef.get().then((doc) => {
    if (doc.exists) {
        aaaa=doc.data()
        assignedmail=aaaa.email;
        
        
        if(assignedmail==selectedemail)
        {
            console.log("No Update");
                document.getElementById('demo').innerHTML = "No Update";
        }

        else
        {
            if (confirm('This Junction has already been assigned to '+assignedmail+"\nDo you still want to continue?")) 
            {
                db.collection("assignedpos").doc(selectedjunction).set({
                    address: selectedjunction,
                    email: selectedemail
                })
                .then(() => {
                    console.log("Document successfully written2!");
                    document.getElementById('demo').innerHTML = "Document Written successfully ";
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                    document.getElementById('demo').innerHTML = "Error writing document";    
                });
                //console.log('Thing was saved to the database.');
              } 
              else 
              {
                // Do nothing!
                //console.log('Thing was not saved to the database.');
              }

        }

        
    } else {
        db.collection("assignedpos").doc(selectedjunction).set({
            address: selectedjunction,
            email: selectedemail
        })
        .then(() => {
            console.log("Document successfully written3!");
            document.getElementById('demo').innerHTML = "Document Written successfully ";
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
            document.getElementById('demo').innerHTML = "Error writing Document";
        });
        console.log('Thing was saved to the database.');

        //console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
    document.getElementById('demo').innerHTML = "Error getting document";
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

/////////////////////

  }




function myFunction() {
  var x = document.getElementById("emailid").value;
  document.getElementById("demo").innerHTML = "APPROVED ";
  }

  ////////////////////////who it is previuosly assigned to left