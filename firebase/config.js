import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBof5ExqS7m_SHZFkpii8DlKVqH5Zh6_08',
  authDomain: 'raact-native.firebaseapp.com',
  projectId: 'raact-native',
  storageBucket: 'raact-native.appspot.com',
  messagingSenderId: '634186073365',
  appId: '1:634186073365:web:58bb42b1b5fbd695c3151c',
  measurementId: 'G-MXZ0GP5QTB',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
