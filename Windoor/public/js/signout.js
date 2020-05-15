// Feel free to implement the signout function by having an
// <a href="index.html" id="signout"> Sign Out </a>

// logout function
const signout = document.querySelector("#signout");

signout.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().signOut().then(function() {
    window.alert("successfully signed out");
    }).catch(function(error) {
    console.log(" you are still logged in ");
    });
});

// redirection after logout
$(function() {
    $("#signout").click(function() {
        $(location).attr('href', 'index.html');
    });
});
