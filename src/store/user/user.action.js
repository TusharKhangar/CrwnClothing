import  USER_ACTION_TYPES from "./user.type";
import { createAction } from "../../utils/reducer/reducer.action"

// 2. Setter, crea action con type (ricevuto da user.type.js) 
// e payload (user, ricevuto dalla chiamata dal componente).
export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
