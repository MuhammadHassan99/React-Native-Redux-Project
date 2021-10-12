import {
  USER_SUCCESS,
  USER_FAILED,
  DELETE_USER,
  IS_LOADING,
} from './actionTypes';
import {getData} from '../../service/service';
import {deleteData} from '../../service/service';

export const fetchUser = () => {
  return dispatch => {
    dispatch(loader(false));
    getData()
      .then(data => dispatch(getUserSuccess(data)))
      .catch(err => dispatch(userFailed(err)));
    return Promise.resolve();
  };
};

export const removeUser = id => {
  return dispatch => {
    deleteData(id)
      .then(() => dispatch(userRemoved(id)))
      .catch(err => dispatch(console.log(err)));
  };
};

const getUserSuccess = data => {
  return {
    type: USER_SUCCESS,
    payload: data,
  };
};

const userFailed = error => {
  return {
    type: USER_FAILED,
    payload: error,
  };
};

const userRemoved = data => {
  return {
    type: DELETE_USER,
    payload: data,
  };
};

export const loader = bool => {
  return {
    type: IS_LOADING,
    payload: bool,
  };
};
