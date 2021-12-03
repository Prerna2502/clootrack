import { CREATE_PIECHART, UPDATE_PIECHART } from "../constants";
import services from "../services";
export const createPieData = (payload) => async (dispatch) => {
    return dispatch({type:CREATE_PIECHART,payload})
}
export const updatePieDataById = (payload) => async (dispatch) => {
    return dispatch({type:UPDATE_PIECHART,payload})
}