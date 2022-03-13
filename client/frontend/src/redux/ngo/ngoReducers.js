import { SET_NGOFUNDINGDATA,SET_NGOEVENTDATA } from "./ngotypes"

const initialState ={
    fundingdata : [],
    eventdata:[]
}


const  setNgoData = (state = initialState, action) =>{
    switch(action.type){
        case SET_NGOFUNDINGDATA : return{
            ...state,
            fundingdata : action.payload,
        }
        case SET_NGOEVENTDATA : return{
            ...state,
            eventdata : action.payload,
        }
    default: return state
    } 
}
export default setNgoData