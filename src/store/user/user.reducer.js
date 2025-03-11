import USER_ACTION_TYPES from "./user.type";

const INITIAL_STATE = {
    currentUser: null,
};

// INITIAL_STATE come default in quanto non utilizziamo l'hook usereducer
export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            return state;
    }
}

// 5. Riceve l'azione dal root reducer e restituisce lo stato, restituiamo per
//  default lo stato e non "type non riconosciuto" come in context perchè ogni reducer
//   riceve action per porzione di stato non interessate. Restituento lo state immutato,
//    eviteremo il re-render del componente. Il flusso ripassa ancora dallo store 
//     che aggiorna lo stato globale.