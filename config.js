import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDR_eR43a0OYXfzKPxE2XzdIgDsi9-71DA",
    authDomain: "attendance-8857b.firebaseapp.com",
    databaseURL: "https://attendance-8857b-default-rtdb.firebaseio.com",
    projectId: "attendance-8857b",
    storageBucket: "attendance-8857b.appspot.com",
    messagingSenderId: "428272930459",
    appId: "1:428272930459:web:cbc47ff42efea85b20c03e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();