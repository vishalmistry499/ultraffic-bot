
var db = firebase.firestore();

var assignedpositionjun = [];
var assignedpositionadd = [];
var assignedpositionemail=[];

 flag =1;

db.collection("assignedpos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {



    	x=doc.data();
        // doc.data() is never undefined for query doc snapshots
        assignedpositionjun.push(x.address);
        assignedpositionemail.push(x.email);

       if (flag == 1){

       	var table = document.getElementById("myTable");
  		var row = table.insertRow(0);
  		var cell1 = row.insertCell(0);
  		var cell2 = row.insertCell(1);
  		var cell3 = row.insertCell(2);
  		// cell1.innerHTML = "abc";
  		// cell2.innerHTML = "def";
  		// cell3.innerHTML = "ghi";
  		flag =2;
       }
        var table = document.getElementById("myTable");
  		var row = table.insertRow(0);
  		var cell1 = row.insertCell(0);
  		var cell2 = row.insertCell(1);
  		cell1.innerHTML = x.email;
  		cell2.innerHTML = x.address;

        var docRef = db.collection("trafficsignals").doc(x.address);

		docRef.get().then((doc) => {
		    if (doc.exists) {
		    	y=doc.data();
		    	assignedpositionadd.push(y.address)
		    	var cell3 = row.insertCell(2);
		  		cell3.innerHTML= y.address;
		    } else {
		        // doc.data() will be undefined in this case
		        console.log("No such document!");
		    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
       
  		
    });
});
