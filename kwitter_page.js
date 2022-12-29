//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBWoehYc_xN2uqG4YNYWbWoou9WBV69HaM",
      authDomain: "kouventa-7cf57.firebaseapp.com",
      databaseURL: "https://kouventa-7cf57-default-rtdb.firebaseio.com",
      projectId: "kouventa-7cf57",
      storageBucket: "kouventa-7cf57.appspot.com",
      messagingSenderId: "756485024780",
      appId: "1:756485024780:web:60be3406ec94487d019229"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
message = message_data['message'];
like = message_data['like'];
name = message_data['name'];

name_with_tag = "<h4>" + name+"<img class= 'user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class= 'message_h4'>" + message+"</h4>";
like_button = "<button class= 'btn btn-warning' id="+firebase_message_id+"value="+like+"onclick= 'updateLike(this.id)'>";

span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
      console.log("clicked on liked button:"+message_id);
      likes = document.getElementById(message_id).value;
      console.log(likes);
      updatedLikes = Number(likes)+1;
      console.log(updatedLikes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedLikes
      });
}

function logout()
{
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}