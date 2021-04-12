

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

    var selectedemail=document.getElementById("emailid").value;
    var selectedjunction=document.getElementById("junction").value;

    
db.collection("assignedpos").doc(selectedjunction).set({
    address: selectedjunction,
    email: selectedemail
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});








  }




function myFunction() {
  var x = document.getElementById("emailid").value;
  document.getElementById("demo").innerHTML = "APPROVED ";
  }

  ////////////////////////who it is previuosly assigned to left