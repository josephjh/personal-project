const initialState = {
    first_name:'',
    last_name:'',
    username:'',
    email:'',
    id:''
}

// const ADD_TO_CART = 'ADD_TO_CART';
const SET_USER = 'SET_USER';
const GET_USER = 'GET_USER'

export function getUser(user){
    return {
        type: GET_USER,
        payload: user
    };
};

export default function userReducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case SET_USER:
            return {...state.user, ...action.payload}
        case GET_USER:
            const {first_name, last_name, username, email, user_id} = action.payload;
            return {...state, first_name:first_name, last_name:last_name, username, email, user_id}
        default:
            return state
    };
};
