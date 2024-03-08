var firebase = require ('firebase/app');
var nodeimu = require ('@trbll/nodeimu');
var IMU = new nodeimu.IMU( );
var sense = require ('@trbll/sense-hat-led');
const { getDatabase, ref, onValue, set, update, get } = require ('firebase/database');

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDAeyJDTBRBZVrfA0F71dJAlS2Ibl52ZHU",

  authDomain: "lab2-1a0d4.firebaseapp.com",

  projectId: "lab2-1a0d4",

  storageBucket: "lab2-1a0d4.appspot.com",

  messagingSenderId: "618734441215",

  appId: "1:618734441215:web:8b8600096d8f920b7a72ca",

  databaseURL: "https://lab2-1a0d4-default-rtdb.firebaseio.com/",

};

firebase.initializeApp(firebaseConfig);

const database = getDatabase();

const updateLightRef = ref(database, "update_light");
onValue(updateLightRef, (snapshot) => {
  const data = snapshot.val();
  updateLightInfo();
});

function updateLightInfo() {
};

firebase.initializeApp('firebaseConfig');
