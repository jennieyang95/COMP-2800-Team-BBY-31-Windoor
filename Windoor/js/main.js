var mainApp = {};

(function() {
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            uid = user.uid;
        } else {
            window.location.replace("login.html");
        }
    });

    function signout() {
        firebase.auth().signOut();
    }
    mainApp.logOut = logout;
})()