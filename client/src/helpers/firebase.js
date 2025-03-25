import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: getEvn('VITE_FIREBASE_API'),
//     authDomain: "yt-mern-blog.firebaseapp.com",
//     projectId: "yt-mern-blog",
//     storageBucket: "yt-mern-blog.firebasestorage.app",
//     messagingSenderId: "150248092393",
//     appId: "1:150248092393:web:34bc9843d732ee4be7f678"
// };
//  Mine
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "blog-project-81607.firebaseapp.com",
    projectId: "blog-project-81607",
    storageBucket: "blog-project-81607.firebasestorage.app",
    messagingSenderId: "848230500168",
    appId: "1:848230500168:web:0cccfc1427e20356e8d57d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }