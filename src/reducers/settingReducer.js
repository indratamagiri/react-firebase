import { DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_RIGISTRATION } from '../actions/type';

const initialState = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
}


export default function(state = initialState, action){
    switch(action.type){
        case DISABLE_BALANCE_ON_ADD:
        return{
            ...state,
            disableBalanceOnAdd: !state.disableBalanceOnAdd
        };
        case DISABLE_BALANCE_ON_EDIT:
        return{
            ...state,
            disableBalanceOnEdit: !state.disableBalanceOnEdit
        };
        case ALLOW_RIGISTRATION:
        return{
            ...state,
            allowRegistration: !state.allowRegistration
        };
        default:
        return state
    }
}