import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE",
  authDomain: "clone-416114.firebaseapp.com",
  projectId: "youtube-clone-416114",
  storageBucket: "youtube-clone-416114.appspot.com",
  messagingSenderId: "505946855265",
  appId: "1:505946855265:web:ac806748dd027eb920d720",
  databaseURL:"https://youtube-clone-416114-default-rtdb.firebaseio.com"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getDatabase(app)