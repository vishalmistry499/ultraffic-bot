

var db = firebase.firestore();

var emailua=[]
var emaildd = document.getElementById("emailid");

var i=0;
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        x=doc.data();
        if(x.status=="1" && x.isAdmin=="0")
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


function btnclick() {

    var selectedemail=document.getElementById("emailid").value;
    var user = db.collection("users").where("email", "==", selectedemail);

    db.collection("users").where("email", "==", selectedemail).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          x=doc.id;

          var user = db.collection("users").doc(x);

// Set the "capital" field of the city 'DC'
return user.update({
    isAdmin: "1"
})
.then(() => {
    console.log("Document successfully updated!");

////////////////////////////////////////////

var length = emaildd.options.length;
for (i = length-1; i >= 0; i--) {
  emaildd.options[i] = null;
}


db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
       
        y=doc.data();
        if(y.status=="1" && y.isAdmin=="0")
        {
        var opt2 = y.email;
        var e2 = document.createElement("option");
        e2.textContent = opt2;
        e2.value = opt2;
        emaildd.appendChild(e2);
    
        }
        
        
    });
});






///////////////////////////////////////



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
  var x = document.getElementById("emailid").value;
  //document.getElementById("demo").innerHTML = "APPROVED ";
  }

  