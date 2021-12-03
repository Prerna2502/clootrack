import { CREATE_PIECHART } from "../constants";
import services from "../services";
export const createPieData = (payload) => async (dispatch) => {
    return dispatch({type:CREATE_PIECHART,payload})
}