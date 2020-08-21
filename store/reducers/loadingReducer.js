import { LOADING, REMOVE_LOADING } from "../types";

const loadingState = {
  loading: true,
};

export default (state = loadingState, action) => {
  const { type } = action;

  switch (type) {
    case REMOVE_LOADING:
      return { ...state, loading: false };
    case LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};
