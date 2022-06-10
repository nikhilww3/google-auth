import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAPOyCfpG6YnNy7zgf2az878bVqXHFUIw4",
  authDomain: "auth-development-934e5.firebaseapp.com",
  databaseURL: "https://auth-development-934e5-default-rtdb.firebaseio.com",
  projectId: "auth-development-934e5",
  storageBucket: "auth-development-934e5.appspot.com",
  messagingSenderId: "423905378313",
  appId: "1:423905378313:web:ae32ba01d025a09d5778d8"
}; 

export const auth = app.auth()
export default app