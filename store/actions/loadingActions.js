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


const searchItem = (term, history) => async (dispatch, getState, api) => {
  try {
    const state = getState();
    const media = state.media.media || []
    const products = state.products.products || []
    const events = state.events.events || []
    const photos = state.events.photos || []
    const promos = state.media.promos || []
    const content = [
      ...media,
      ...products, 
      ...events, 
      ...photos, 
      ...promos
    ]
    
    const regex = new RegExp(`${term}`, 'gi')
    console.log(content)
  } catch (ex) {
    console.log(ex)
  }
}

export { setLoaded, setLoading, searchItem };
