// firebase/client.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics"; // ✅ import this

const firebaseConfig = {
  apiKey: "AIzaSyBw12BzG9fThp0ZywkqNT2jcQJPt3Z9le4",
  authDomain: "prepwise-30a5e.firebaseapp.com",
  projectId: "prepwise-30a5e",
  storageBucket: "prepwise-30a5e.firebasestorage.app",
  messagingSenderId: "453204146253",
  appId: "1:453204146253:web:a274f585be17825abc4404",
  measurementId: "G-PK23RWSBKG"
};

// Initialize Firebase once
const app = initializeApp(firebaseConfig);

// Auth (safe on both client and server)
const auth = getAuth(app);

// Analytics (browser only)
let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) analytics = getAnalytics(app);
    })
    .catch(() => {
      console.warn("Firebase Analytics not supported in this environment.");
    });
}

export { app, auth, analytics };
