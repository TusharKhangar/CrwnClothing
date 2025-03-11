import { loadStripe } from "@stripe/stripe-js";

// Abbiamo salvato la key in ./.env e lo abbiamo aggiunto
// a gitIgnore per non caricarlo su github
export const stripePromise = loadStripe(
    import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);