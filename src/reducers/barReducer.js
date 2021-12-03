import { CREATE_BARCHART, UPDATE_BARCHART, DELETE_BARCHART} from "../constants";

const initialState = null;

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_BARCHART:
      return action.payload;
    case UPDATE_BARCHART:
      return action.payload;
    case DELETE_BARCHART:
      return null;
    default:
      return state;
  }
}