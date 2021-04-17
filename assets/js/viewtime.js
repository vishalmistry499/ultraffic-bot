var emailua=[]
var emaildd = document.getElementById("junction");

var i=0;


var db = firebase.firestore();

db.collection("trafficsignalstiming").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        x=doc.data();

        emailua.push(x.name);
        console.log(emailua[i]);

        var opt = emailua[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        emaildd.appendChild(el);
        i++;
    
        
        
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




var selectedjunction=document.getElementById("junction").value;
var docRef = db.collection("users").doc(uid);

docRef.get().then((doc) => {
if (doc.exists) {
  aa=doc.data();
  isAdmin=aa.isAdmin;

  if(isAdmin=="1")
  {

    var str1="";
    var docRef1 = db.collection("trafficsignalstiming").doc(selectedjunction);

    docRef1.get().then((doc) => {
        if (doc.exists) {
            x=doc.data();
            if(x.mode=="Dynamic")
            {
                str1=str1+"Assigned by "+x.assignedby+" <br> Mode is Dynamic"
                console.log(str1);
                document.getElementById("demo").innerHTML = str1;
        
            }
            else
            {
                
                str1=str1+"Assigned by "+x.assignedby+" <br>Mode is Static <br> Green Delay is "+x.green;
                console.log(str1);
                document.getElementById("demo").innerHTML = str1;
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
         


  }

  else
  {
             console.log("NOT ADMIN");
             firebase.auth().signOut();
             window.alert("You are not Admin. Only Admins are allowed to Login.\nUse AndroidApp instead.");
             window.close();
             //window.open('test1.html', target="_self");  
              
  }
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}).catch((error) => {
console.log("Error getting document:", error);
});

     
     
}

}
