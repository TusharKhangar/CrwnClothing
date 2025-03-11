import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormInput from '../FormInput/FormInput.component';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component';

import { SignInFormContainer, ButtonsContainer} from './SignInForm.styles';

import { 
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils';


const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate();

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }
    
    // Log in con Google
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        navigate('/');
    }

    // Funzione per gestire i toast
    const handleToast = (type) => {
        if (type === 'success') {
            toast.success('✅ Login effettato con successo');
        } else {
            toast.error('❌ Credenziali errate!'); 
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInAuthWithEmailAndPassword(email, password);
            const user = userCredential.user;
            resetFormFields();
            handleToast('success');
            setTimeout(() => navigate('/'), 2000);
        } catch (error) {
            console.log("Errore ricevuto:", error);
            handleToast('error');
        }
    }

  return (
    <SignInFormContainer>
        <form onSubmit={handleSubmit}>
            <h1>Hai già un account?</h1>
            <span>Accedi con la tua email e password</span>
            <FormInput
                label='Email'
                type='email' 
                name='email' 
                value={email}
                required
                onChange={handleChange}
            />
            <FormInput 
                label='Password'
                type='password' 
                name='password' 
                value={password}
                required
                onChange={handleChange}
            />
            <ButtonsContainer>
                <Button 
                    buttonType={BUTTON_TYPE_CLASSES.inverted} 
                    type='submit'
                >
                    Log In
                </Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.google} 
                    type='button' 
                    onClick={signInWithGoogle}
                    className='no-display'
                >
                    Google Sign In
                </Button>
            </ButtonsContainer>
        </form>
    </SignInFormContainer>
  )
}

export default SignInForm;