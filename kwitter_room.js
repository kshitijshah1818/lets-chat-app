
const firebaseConfig = {
      apiKey: "AIzaSyC_3SOXIINKdCQFoRd87nowAt3k-8jQ_po",
      authDomain: "kwitter-a57c6.firebaseapp.com",
      databaseURL: "https://kwitter-a57c6-default-rtdb.firebaseio.com",
      projectId: "kwitter-a57c6",
      storageBucket: "kwitter-a57c6.appspot.com",
      messagingSenderId: "145635207100",
      appId: "1:145635207100:web:e493a591c0daa09d4f6db9"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";

    } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem(room_name);
      localStorage.removeItem(user_name);
      window.location="index.html";
}