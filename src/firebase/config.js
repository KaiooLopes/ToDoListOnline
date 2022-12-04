import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQEjDhFafbaBNu5OPLeJU2_IG0ZrBkong",
  authDomain: "todolist-e3f3a.firebaseapp.com",
  projectId: "todolist-e3f3a",
  storageBucket: "todolist-e3f3a.appspot.com",
  messagingSenderId: "434135372167",
  appId: "1:434135372167:web:9e2575bb221fa0aaac4322",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
