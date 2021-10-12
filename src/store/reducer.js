import {
  USER_SUCCESS,
  USER_FAILED,
  DELETE_USER,
  IS_LOADING,
} from './actionTypes';

const initialState = {
  data: [],
  isLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case USER_FAILED:
      return console.log(action.payload);
    case DELETE_USER:
      const updatedData = state.data.filter(res => res.id !== action.payload);
      return {
        ...state,
        data: updatedData,
      };
    case IS_LOADING:
      return {
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
