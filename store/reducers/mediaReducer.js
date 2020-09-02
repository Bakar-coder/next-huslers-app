import { SET_MEDIA, REMOVE_MEDIA, GET_PROMOS } from "../types";

const mediaState = {
  media: null,
  promos: null,
};

export default (state = mediaState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MEDIA:
      return { ...state, media: payload };
    case REMOVE_MEDIA:
      return { ...state, media: null };
    case GET_PROMOS:
      return { ...state, promos: payload };

    default:
      return state;
  }
};
