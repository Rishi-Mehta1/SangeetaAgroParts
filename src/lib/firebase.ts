import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDj_K6tBoH7_XIDnAZoE0i-hMquJ7xjAVg",
  authDomain: "sangeeta-agro-parts.firebaseapp.com",
  projectId: "sangeeta-agro-parts",
  storageBucket: "sangeeta-agro-parts.firebasestorage.app",
  messagingSenderId: "425526946756",
  appId: "1:425526946756:web:caa1bbb12341ceb6341291",
  measurementId: "G-5LCDTSMHW3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 