import { CREATE_PIECHART, UPDATE_PIECHART, DELETE_PIECHART} from "../constants";

const initialState = null;

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_PIECHART:
      return action.payload;
    case UPDATE_PIECHART:
      return action.payload;
    case DELETE_PIECHART:
      return null;
    default:
      return state;
  }
}