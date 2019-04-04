// Initialize Firebase
var config = {
  apiKey: "AIzaSyDg_uJE4FJpnbYVtgFVXhKWA6LRDyoWV6w",
  authDomain: "based-18c66.firebaseapp.com",
  databaseURL: "https://based-18c66.firebaseio.com",
  projectId: "based-18c66",
  storageBucket: "based-18c66.appspot.com",
  messagingSenderId: "881070869166"
};

alert("Elyes is the best head of Leads ever");

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  //Get value
  var name = getInputVal("text");

  var message = getInputVal("text2");

  console.log(name);
  // Save message
  saveMessage(name, message);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    text: name,

    text2: message
  });
}
