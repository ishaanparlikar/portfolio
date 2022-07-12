import { initializeApp } from 'Firebase/app';
import { getAnalytics } from 'firebase/analytics';


const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: import.meta.env.VITE_authDomain,
	projectId: import.meta.env.VITE_projectId,
	storageBucket: import.meta.env.VITE_storageBucket,
	messagingSenderId: import.meta.env.VITE_messagingSenderId,
	appId: import.meta.env.VITE_appId,
	measurementId: import.meta.env.VITE_measurementId
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);