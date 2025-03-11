const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInAuthWithEmailAndPassword(email, password);
            const user = userCredential.user;
            resetFormFields();
            navigate('/');
          } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Password non corretta');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
            }
            console.log(error);
          }
    }