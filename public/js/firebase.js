let firebaseConfig = {
    apiKey: "AIzaSyAGJbhZsYkvaHROfGsw20bXpkRWH3T2ZkQ",
    authDomain: "blogging-website-6efb1.firebaseapp.com",
    projectId: "blogging-website-6efb1",
    storageBucket: "blogging-website-6efb1.appspot.com",
    messagingSenderId: "433208500669",
    appId: "1:433208500669:web:a836c87712bb304f0432d4"
    
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();