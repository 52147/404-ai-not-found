// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 配置（請確保這是你的正確憑證）
const firebaseConfig = {
  apiKey: "AIzaSyDy4bBsQeb2NRxO3ukxbfZVorjXbc5LNCI",
  authDomain: "my-blog-47fca.firebaseapp.com",
  projectId: "my-blog-47fca",
  storageBucket: "my-blog-47fca.firebasestorage.app",
  messagingSenderId: "1020595754749",
  appId: "1:1020595754749:web:f524455bd72159e9fc9094",
  measurementId: "G-KXLP6BD0BG",
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 初始化 Firestore 並導出
export const db = getFirestore(app);