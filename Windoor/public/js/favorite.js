function docsize() {
    let email = document.getElementById("useremail").value;
   // document.getElementById("unfavorite").style.color = "Yellow";
    
console.log(email)
   

   db.collection("useraccount").doc(email).collection("favorite").get().then(snapshot => {
        length = snapshot.size

      
     
    //  createbutton(length)
    pulldoclistncreatebutton(length)
}) 
  

   }




function pulldoclistncreatebutton(length) {
let email = document.getElementById("useremail").value;
console.log("test" + email)
const events = firebase.firestore().collection('useraccount').doc(email).collection("favorite")
events.get().then((querySnapshot) => {
  const doclist = []
  querySnapshot.forEach((doc) => {
     doclist.push({ id: doc.id, ...doc.data() })
  })
  console.log(doclist)
  for(i = 0; i < length; i++) {
  //console.log(doclist[i].activity)
 // console.log(doclist[i].category)

  let btn = document.createElement("BUTTON");
  
  btn.id = doclist[i].activity
  btn.value = doclist[i].category
  btn.innerHTML = doclist[i].activity
  btn.className = "favoritebtn"

  btn.setAttribute("onclick", "selactivity(this.id); redirect()");
  
  document.getElementById("buttons").appendChild(btn);

  let br = document.createElement("p")
  br.innerHTML = "<br>"

  document.getElementById("buttons").appendChild(br);


  }
})
}

pulldoclistncreatebutton()


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



   function selactivity(clicked_id) {
       



       let selcatego = document.getElementById(clicked_id).value;   //gets user input
       let selecteac = document.getElementById(clicked_id).id;
       console.log(selcatego);
       console.log(selecteac);
       db.collection("useractselc").doc("catenact").set({
           category: selcatego,
           activities: selecteac
       })
      

   }




addEventListener("load",function(){
  
  var link = document.getElementsByClassName("instr");
  for (i = 0; i < 50; i++) {
  link[i].addEventListener("click",function(e){
      e.preventDefault();
      
      // after 0.5 seconds, relocate user to the link
      setTimeout(function(){ 
        window.location.href = "instructionpage.html"; }, 500);
      }) 
}}); 



function redirect() {

setTimeout(function(){ 
        window.location.href = "instructionpage.html"; }, 500);
}