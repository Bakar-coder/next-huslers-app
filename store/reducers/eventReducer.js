import { SET_EVENTS, DELETE_EVENT } from "../types";

const eventState = {
  events: null,
};

export default (state = eventState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_EVENTS:
      return { ...state, events: payload };
    case DELETE_EVENT:
      return {
        ...state,
        products: [...state.events].filter(
          (event) => event._id !== payload._id
        ),
      };

    default:
      return state;
  }
};
