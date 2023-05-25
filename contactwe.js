const firebaseConfig = {
    apiKey: "AIzaSyAS4zkKbsMGOZ1cvfJd8QUiiSqIAb4p2Mw",
    authDomain: "legal-genies-fb784.firebaseapp.com",
    databaseURL: "https://legal-genies-fb784-default-rtdb.firebaseio.com",
    projectId: "legal-genies-fb784",
    storageBucket: "legal-genies-fb784.appspot.com",
    messagingSenderId: "31281251836",
    appId: "1:31281251836:web:ed76c049c65c440a515e79"
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var occupation = getInputVal('occupation');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, occupation, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, occupation, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    occupation:occupation,
    email:email,
    phone:phone,
    message:message
  });
}
