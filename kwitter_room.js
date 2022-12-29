
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBWoehYc_xN2uqG4YNYWbWoou9WBV69HaM",
      authDomain: "kouventa-7cf57.firebaseapp.com",
      databaseURL: "https://kouventa-7cf57-default-rtdb.firebaseio.com",
      projectId: "kouventa-7cf57",
      storageBucket: "kouventa-7cf57.appspot.com",
      messagingSenderId: "756485024780",
      appId: "1:756485024780:web:60be3406ec94487d019229"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
Username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+Username;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page_html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}