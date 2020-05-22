

    


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
for (i = 0; i < 4; i++) {
link[i].addEventListener("click",function(e){
 e.preventDefault();
 // do some database stuff
 // after 5 seconds, trigger the link
 setTimeout(function(){ 
   window.location.href = "instructionpage.html"; }, 500);
 }) 
}}); 


