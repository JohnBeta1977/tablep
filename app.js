import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
const firebaseConfig = { /* Your config */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
document.getElementById('google-login').onclick = () => signInWithPopup(auth, googleProvider);
document.getElementById('github-login').onclick = () => signInWithPopup(auth, githubProvider);
document.getElementById('twitter-login').onclick = () => signInWithPopup(auth, twitterProvider);
onAuthStateChanged(auth, user => { if(user){ user.getIdToken().then(token=>localStorage.setItem('jwt',token)); document.getElementById('login-modal').classList.add('hidden'); } else localStorage.removeItem('jwt'); });
// Additional frontend logic omitted for brevity