
var db = firebase.firestore();

const junctionName = document.getElementById('junctionName');
const address1 = document.getElementById('address');
const btnAdd = document.getElementById('btnAdd'); 



if(btnAdd) 
{
    btnAdd.addEventListener('click', e => {
      const name1 = junctionName.value;
      const address = address1.value;
    

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


    });
}

function addjunction(){
  



}