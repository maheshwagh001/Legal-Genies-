firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login-index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
        document.querySelector('.alert').style.display = 'block';

        // Hide alert after 3 seconds
        setTimeout(function(){
          document.querySelector('.alert').style.display = 'none';
        },3000);
    }
})


function logout(){
    firebase.auth().signOut()
}
