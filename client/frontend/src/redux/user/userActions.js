import { SET_USERDATA} from "./userTypes"

export const setUserData = (data) =>{
    console.log(data)
    return {
        type: SET_USERDATA,
        payload: data
    }

}