import { SET_MEDIA, REMOVE_MEDIA } from "../types";

const mediaState = {
  media: null,
};

export default (state = mediaState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MEDIA:
      return { ...state, media: payload };
    case REMOVE_MEDIA:
      return { ...state, media: null };

    default:
      return state;
  }
};
