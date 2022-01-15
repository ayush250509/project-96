const firebaseConfig = {
    apiKey: "AIzaSyAwkJpYZC-dDGyFPEbfqSSjWM2OT_7XL_E",
    authDomain: "kwitter-e212c.firebaseapp.com",
    databaseURL: "https://kwitter-e212c-default-rtdb.firebaseio.com",
    projectId: "kwitter-e212c",
    storageBucket: "kwitter-e212c.appspot.com",
    messagingSenderId: "670381184493",
    appId: "1:670381184493:web:26c0978c462848711643e4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() 
  {
        msg = document,getElementById("msg").value;
        firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
        });
        document.getElementById("msg").value = ""; 
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;



    } });  }); }
getData();
