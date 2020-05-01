//제이쿼리 
$(document).ready(function() {


$(document).on('click','.join',function(){

    var email = $('#email').val();
    var password = $('#pwd').val();
    name = $('#name').val();

firebaseEmailAuth.createUserWithEmailAndPassword(email, password).then(function(user) {
    
    userInfo = user; 
    console.log("userInfo/"+userInfo);
    console.log("userInfo.currentUser/"+userInfo.currentUser);
    console.log("userInfo.uid/"+userInfo.uid);
    
    logUser(); 

}, function(error) {

    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    
});

function logUser(){
    var ref = firebaseDatabase.ref("users/"+userInfo.uid);
    
    var obj = {
        name: name,
    };

    ref.set(obj);
    alert("Sign Up successful!");

    window.location.href = "/index.html"
}

    });
});