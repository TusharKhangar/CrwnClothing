import React from 'react';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  return (
    <div style={{ margin: '5rem' }}>
        <ToastContainer
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            closeButton={false}
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="colored"
            transition={Bounce}
            position='top-center'
            style={{ marginTop: '5.4rem' }}
        />
    </div>
  )
}

export default Toast