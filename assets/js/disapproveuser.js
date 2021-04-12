

var db = firebase.firestore();

var emailua=[]
var emaildd = document.getElementById("emailid");

var i=0;
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
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

        //console.log(doc.id, " => ", x.email);

        }
        
        
    });
});

function btnclick() {

    myFunction();

    var selectedemail=document.getElementById("emailid").value;



    db.collection("users").where("email", "==", selectedemail).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {


          x=doc.id;


    var user = db.collection("users").doc(x);

    return user.update({
    status: "0",
    isAdmin:"0"
    })
.then(() => {

    ////////////////////////////////////////////////////////////////////
    var length = emaildd.options.length;
    for (i = length-1; i >= 0; i--) {
    emaildd.options[i] = null;
    }

    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            y=doc.data();
            if(y.status=="1")
            {
    
            var opt2 = y.email;
            var e2 = document.createElement("option");
            e2.textContent = opt2;
            e2.value = opt2;
            emaildd.appendChild(e2);
            
         
    
            }
            
            
        });
    });

    
    /////////////////////////////////////////////////////////////



    db.collection("assignedpos").where("email", "==", selectedemail)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            z=doc.data();
            zz=z.address;
            
            db.collection("assignedpos").doc(zz).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    console.log("Document successfully updated!");
})
.catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});


        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  


  }



function myFunction() {
   
  }

  