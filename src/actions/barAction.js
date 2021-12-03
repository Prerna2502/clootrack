import { CREATE_BARCHART, UPDATE_BARCHART } from "../constants";
import services from "../services";
import { createPieData } from "./pieAction";
export const createBarData = (payload) => async (dispatch) => {
    return dispatch({type:CREATE_BARCHART,payload})
}
export const updateBarDataById = (payload) => async (dispatch) => {
    return dispatch({type:UPDATE_BARCHART,payload})
}
export const fetchData = () => async (dispatch) => {
    // return dispatch({ type: assets.listAssets., payload });

    let stepStatus = await services.getStaticData();
    const barArray = stepStatus.filter((val)=>val.type==="Bar").map((val,i)=>{return {
        id:"Bar"+i,
        ...val
    }});
    dispatch(createBarData(barArray));
    const pieArray = stepStatus.filter((val)=>val.type==="Pie").map((val,i)=>{return {
        id:"Pie"+i,
        ...val
    }});
    dispatch(createPieData(pieArray));
    console.log(stepStatus);
  };