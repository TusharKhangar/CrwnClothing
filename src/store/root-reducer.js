// Metodo che cobina più reducer in un "unico reducer".
import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

// Key-value pair porzione-stato e rispettivo Reducer
export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
});

// 4. Riceve l'azione e la passa a tutti i reducers anche se non gestiscono
//  la porzione di state interessata dall'azione.