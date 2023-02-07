import axios from 'axios';
import {
  GET_POLLS_LIST_SUCCESS,
  GET_POLLS_LIST_FAIL,
  GET_POLL_SUCCESS,
  GET_POLL_FAIL,
  GET_POLLS_LIST_CATEGORIES_SUCCESS,
  GET_POLLS_LIST_CATEGORIES_FAIL,
  GET_SEARCH_POLL_SUCCESS,
  GET_SEARCH_POLL_FAIL
} from "./types"

export const get_polls_list = () => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/polls/`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_POLLS_LIST_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_POLLS_LIST_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_POLLS_LIST_FAIL
    });
  }
}

export const get_polls_list_page = (p) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/polls/?p=${p}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_POLLS_LIST_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_POLLS_LIST_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_POLLS_LIST_FAIL
    });
  }
}

export const get_polls_list_category = (category_id) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/polls/category/${category_id}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_POLLS_LIST_CATEGORIES_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_POLLS_LIST_CATEGORIES_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_POLLS_LIST_CATEGORIES_FAIL
    });
  }
}


export const get_polls_list_category_page = (category_id,p) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/polls/category/${category_id}?p=${p}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_POLLS_LIST_CATEGORIES_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_POLLS_LIST_CATEGORIES_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_POLLS_LIST_CATEGORIES_FAIL
    });
  }
}

export const get_poll = (slug) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/polls/${slug}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_POLL_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_POLL_FAIL
      });
    }
  } catch (err) {
    dispatch({
      type: GET_POLL_FAIL
    });
  }
};

export const search_poll = (search_term) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/polls/search/${search_term}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_POLL_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_POLL_FAIL
    });
  }
};