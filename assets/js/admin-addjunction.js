
var db = firebase.firestore();

const junctionName = document.getElementById('junctionName');
const address1 = document.getElementById('address');
const btnAdd = document.getElementById('btnAdd'); 


if(btnAdd) 
{
    btnAdd.addEventListener('click', e => {
      const name1 = junctionName.value;
      const address1 = address1.value;
      //console.log(email);
////////////////////////////////////////////

Add a new document in collection "cities"
db.collection("trafficsignals").doc(name1).set({
    name: name1,
    address: address1
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

//////////////////////////////////////////////
    });
}

function addjunction(){
  



}