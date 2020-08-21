import { REMOVE_LOADING, LOADING } from "../types";

const setLoaded = () => async (dispatch, getState, api) => {
  try {
    dispatch({ type: REMOVE_LOADING });
  } catch (ex) {
    console.log(ex);
  }
};

const setLoading = () => async (dispatch, getState, api) => {
  try {
    dispatch({ type: LOADING });
  } catch (ex) {
    console.log(ex);
  }
};

export { setLoaded, setLoading };
