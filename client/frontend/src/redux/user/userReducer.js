import { SET_USERDATA } from "./userTypes"

const initialState ={
    user_id:0,
    email : '',
    fName: '',
    lName : '',
    isNGO: false,
    token:'',
    isAuthenticated: false
}


const setUserData = (state = initialState, action) =>{
    switch(action.type){
        case SET_USERDATA : return{
            ...state,
            user_id : action.payload.user_id,
            email : action.payload.email,
            fName : action.payload.first_name,
            lName : action.payload.last_name,
            isNGO : action.payload.is_NGO,
            token : action.payload.token,
            isAuthenticated: true
        }
    default: return state
    } 
}
export default setUserData