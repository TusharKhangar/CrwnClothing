import { initializeApp } from "firebase/app";

import SHOP_DATA from '../../shop-data';
import { 
  getAuth, // Richiesta autorizzione
  signInWithRedirect, // Log In Google nuova finestra
  signInWithPopup, // Log In con pop-up
  GoogleAuthProvider, // Provider per autorizzazione Google
  createUserWithEmailAndPassword, // Crea nuovo utente
  signInWithEmailAndPassword, // Log in
  signOut, // Log out
  onAuthStateChanged, // Observer monitora i cambiamenti dello state dell'utente
} from 'firebase/auth';


import { 
  getFirestore, // Istanzia FireStore
  doc, // Riceve il documento
  getDoc, // Ottiene i dati
  setDoc, // Modifica i dati
  collection, // Riferimento a collezione nel DB
  writeBatch, // Raggruppa di operazioni di scrittura
  query, // Crea una query, recupera documenti da collezione
  getDocs // Esegue una query e restituisce i documenti corrispondenti
} from "firebase/firestore";

// Web App firebase configurazione presa dal mio profilo
const firebaseConfig = {
  apiKey: "AIzaSyDO_1CIy2dyFmDL8UQ9t5zYmYBkjyQgWiE",
  authDomain: "crwn-clothing-db-e7fd3.firebaseapp.com",
  projectId: "crwn-clothing-db-e7fd3",
  storageBucket: "crwn-clothing-db-e7fd3.appspot.com",
  messagingSenderId: "1042191819268",
  appId: "1:1042191819268:web:133c1544639726300a8b51"
};


// Inizializziamo FireBase
const firebaseapp = initializeApp(firebaseConfig);


// Crea  una nuovo classe Provider 
const provider = new GoogleAuthProvider();

// Forza l'utente a selezionare un account Google durante il processo di autenticazione
provider.setCustomParameters({
    prompot: "select_account"
});

// Otteniamo autorizzazione
// Autenticazioni con Google
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


// Inzializziamo il DB con getFireStore
export const db = getFirestore();

// 
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  for (const object of objectsToAdd) {
      const docRef = doc(collectionRef, object.title.toLowerCase());

      // Controlla se il documento della collezione esiste già
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
          const existingData = docSnap.data();

          // Confronta gli oggetti interni per vedere se sono già presenti
          object.items.forEach((newItem) => {
              const itemExists = existingData.items.some(
                  (existingItem) => existingItem.id === newItem.id
              );

              if (!itemExists) {
                  // Se l'oggetto non esiste, aggiungilo
                  existingData.items.push(newItem);
              } else {
                  console.log(`L'elemento ${newItem.name} esiste già in ${object.title}.`);
              }
          });

          // Aggiorna il documento con i nuovi dati
          batch.set(docRef, existingData);
      } else {
          // Se il documento non esiste, aggiungilo direttamente
          batch.set(docRef, object);
      }
  }

  // Esegui il batch per salvare tutte le modifiche
  await batch.commit();
  console.log("Dati caricati su Firebase senza duplicati.");
};

// addCollectionAndDocuments('categories', SHOP_DATA)
//     .then(() => console.log("Dati caricati senza duplicati"))
//     .catch(error => console.error("Errore nel caricamento: ", error));

export  const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
}

/* Crea un documento utente, argomento l'autorizzazione.
 Doc accetta 3 argomenti, db, collection e l'ID
 come ID utilizziamo quello fornito da userAuth */

export const createUserDocumentFromAuth = async (userAuth, additionalInfos = {}) => {
  
  if (!userAuth) return;

  const userDocRef = doc(db, 'user', userAuth.uid);

  // Rappresenta tutti i dati dell'utente al momento
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfos
      });
    } catch (error) {
      console.log("errore nel creare utente", error.message)
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);

}

// Auth tiene traccia anche se un utente è logatto o meno.
export const signOutUser = async () => await signOut(auth);

// Esegue callback ogni volta che l'utente logga o slogga
// Observer
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};