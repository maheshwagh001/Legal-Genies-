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

// var config = {
// apiKey: "AIzaSyAS4zkKbsMGOZ1cvfJd8QUiiSqIAb4p2Mw",
// authDomain: "legal-genies-fb784.firebaseapp.com",
// databaseURL: "https://legal-genies-fb784-default-rtdb.firebaseio.com",
// projectId: "legal-genies-fb784",
// storageBucket: "legal-genies-fb784.appspot.com",
// messagingSenderId: "31281251836",
// appId: "1:31281251836:web:ed76c049c65c440a515e79"
// };
// firebase.initializeApp(config);
// Your web app's Firebase configuration

// Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyByAyRugxMMgmXYI8NmpIJgdtTuCr9FQwc",
  //   authDomain: "legal-genies.firebaseapp.com",
  //   projectId: "legal-genies",
  //   storageBucket: "legal-genies.appspot.com",
  //   messagingSenderId: "1076725731171",
  //   appId: "1:1076725731171:web:7fc79fd6490f952214cd56",
  //   measurementId: "G-MDVG2ZG9RP"
  // };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);


  // const firebaseConfig = {
  //     apiKey: "AIzaSyAS4zkKbsMGOZ1cvfJd8QUiiSqIAb4p2Mw",
  //     authDomain: "legal-genies-fb784.firebaseapp.com",
  //     databaseURL: "https://legal-genies-fb784-default-rtdb.firebaseio.com",
  //     projectId: "legal-genies-fb784",
  //     storageBucket: "legal-genies-fb784.appspot.com",
  //     messagingSenderId: "31281251836",
  //     appId: "1:31281251836:web:ed76c049c65c440a515e79"
  //   };
  //   firebase.initializeApp(firebaseConfig);
  //   // firebase.initializeApp(config);
  //   var db = firebase.firestore();
    // const app = initializeApp(firebaseConfig);

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
