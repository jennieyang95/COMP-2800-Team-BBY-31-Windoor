var videndes = {};


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

       function getuserchoice() {
            db.collection("useractselc").doc("catenact").onSnapshot(
                function (snap) {
                   
                   let usercate = snap.data().category;
                   let useracti = snap.data().activities;
                  
                pullvidndes(usercate, useracti)
                

               })}

       getuserchoice();

      
       function pullvidndes(a,b) {

        let activideo = b + "v";
        let actidescrp = b + "d";

            db.collection("instruction").doc(a).onSnapshot(
                function (snap) {
              
                   let activid = snap.data()[activideo];
                   let actidescr = snap.data()[actidescrp];
                  
                   document.getElementById("video").src = activid;
                   document.getElementById("description").innerHTML = actidescr;

               })}

       getuserchoice();



       firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    document.getElementById("name").innerHTML = "Enjoy " + user.displayName + "!"
    document.getElementById("useremail").value = user.email  
   
  } else {
      // No user is signed in.
  }
});

    

       function favunvaf() {


        
       
        document.getElementById("favorite").style.color = "Yellow";
        let email = document.getElementById("useremail").value;
        

        db.collection("useractselc").doc("catenact").onSnapshot(
                function (snap) {
                   
                   let usercate = snap.data().category;
                   let useracti = snap.data().activities;

        db.collection("useraccount").doc(email).collection("favorite").doc(useracti).set({
  
          category: usercate,
          activity: useracti
         
  

        })

        })
      

       }