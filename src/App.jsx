import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils.js';

import GoToTop from './components/GoToTop/GoToTop.component.jsx';
import Navigation from './routes/navigation/Navigation.route.jsx';
import Home from './routes/home/Home.jsx';
import Authentication from './routes/authentication/Authentication.route.jsx';
import Shop from './routes/shop/shop.route.jsx'; 
import CheckOut from './routes/checkOut/CheckOut.route.jsx';
import { setCurrentUser } from './store/user/user.action.js';
import Toast from './components/Toast/Toast.component.jsx';

import './App.css'

/* Index viene utilizzato per definire la route figlio predefinita all'interno di una route genitore
    * asterisco fa determinare a Shop la route figlia */

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    })
    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <GoToTop />
      <Routes>
        <Route path='/' element={<Navigation/>} >
        <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} >
            <Route path='*' element={<Shop />} />
          </Route>
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={ <CheckOut />} />
        </Route>
      </Routes>
      <Toast />
    </>
  )
}

export default App
