import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDy4pKkeLKz_nkd3m9eTUtX-DXSXAPO_Rc",
  authDomain: "vue3-a54fa.firebaseapp.com",
  databaseURL: "https://vue3-a54fa.firebaseio.com",
  projectId: "vue3-a54fa",
  storageBucket: "vue3-a54fa.appspot.com",
  messagingSenderId: "463977605624",
  appId: "1:463977605624:web:0ea1b5e2abf499b6d74e0d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref('chats');

export default firebase;