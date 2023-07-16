
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAE_6lPTC2X3O1ab5k_RbqWVGMZlB1hND4",
  authDomain: "tiktok---jornada-70993.firebaseapp.com",
  projectId: "tiktok---jornada-70993",
  storageBucket: "tiktok---jornada-70993.appspot.com",
  messagingSenderId: "833316254713",
  appId: "1:833316254713:web:4b8db006a2faeb94cc8328"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export default db;