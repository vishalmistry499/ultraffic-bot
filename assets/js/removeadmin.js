

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
        if(x.status=="1" && x.isAdmin=="1")
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


    var selectedemail=document.getElementById("emailid").value;



    db.collection("users").where("email", "==", selectedemail).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {


          x=doc.id;


    var user = db.collection("users").doc(x);

    return user.update({
    isAdmin:"0"
    })
.then(() => {

    var length = emaildd.options.length;
for (i = length-1; i >= 0; i--) {
  emaildd.options[i] = null;
}


db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        x=doc.data();
        if(x.status=="1" && x.isAdmin=="1")
        {

        var opt2 = x.email;
        var el2 = document.createElement("option");
        el2.textContent = opt2;
        el2.value = opt2;
        emaildd.appendChild(el2);
        i++;

        //console.log(doc.id, " => ", x.email);

        }
        
        
    });
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

  