import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAPlYDrsk40Y-E9G16zMJM15RKHx3l53Qc",
  authDomain: "swiggy-clone-77dbf.firebaseapp.com",
  projectId: "swiggy-clone-77dbf",
  storageBucket: "swiggy-clone-77dbf.appspot.com",
  messagingSenderId: "636085896700",
  appId: "1:636085896700:web:36490a6b0722ccba4cde79"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)