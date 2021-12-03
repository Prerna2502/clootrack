import { API_URL } from "../constants"
import fetchApi from "../utils"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getStaticData : async ()=>{
        let stepStatus = await fetchApi(API_URL);
        return stepStatus;
    }
}