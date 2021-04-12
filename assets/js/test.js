

var db = firebase.firestore();

// var select = document.getElementById("selectNumber");
// var options = ["1", "2", "3", "4", "5"];
// for(var i = 0; i < options.length; i++) {
//     var opt = options[i];
//     var el = document.createElement("option");
//     el.textContent = opt;
//     el.value = opt;
//     select.appendChild(el);
// }

var emailua=[]
var emaildd = document.getElementById("emailid");

var i=0;
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        x=doc.data();
        emailua.push(x.email);
        console.log(emailua[i]);

        var opt = emailua[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        emaildd.appendChild(el);
        i++;

        //console.log(doc.id, " => ", x.email);
        
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
    status: "1"
})
.then(() => {
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
  var x = document.getElementById("emailid").value;
  document.getElementById("demo").innerHTML = "APPROVED ";
  }

  