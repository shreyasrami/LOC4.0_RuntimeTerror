
import { SET_NGOFUNDINGDATA,SET_NGOEVENTDATA} from "./ngotypes"

export const setNgoFundingData = (data) =>{
    console.log(data)
    return {
        type: SET_NGOFUNDINGDATA,
        payload: data
    }
}

export const setNgoEventData = (data) => {
    return{
        type:SET_NGOEVENTDATA,
        payload:data
    }
}