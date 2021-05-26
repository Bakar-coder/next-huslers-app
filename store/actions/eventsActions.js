import { DELETE_EVENT } from "../types";

import setError from "../../utils/exceptions";
import setAlert from "../../utils/alerts";
import progressbar from "../../utils/uploadProgress";

export const add_event = (
  formData,
  router,
  setFileUploadPercentage,
  fileUploadPercentage
) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/events/add-event", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (event) =>
        progressbar(event, setFileUploadPercentage, fileUploadPercentage),
    });
    setAlert(data);
    return router.push("/events");
  } catch (ex) {
    setError(ex);
  }
};

export const deleteEvent = (event) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/events/delete-event", event);
    if (data.success) dispatch({ type: DELETE_EVENT, payload: event });
    setAlert(data);
  } catch (ex) {
    setError(ex);
  }
};




export const add_image = (
  formData,
  router,
  setFileUploadPercentage,
  fileUploadPercentage
) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/photos/add-photo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (event) =>
        progressbar(event, setFileUploadPercentage, fileUploadPercentage),
    });
    setAlert(data);
    return router.push("/gallery");
  } catch (ex) {
    setError(ex);
  }
};

export const delete_image = (event) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/photos/delete-photo", event);
    if (data.success) dispatch({ type: DELETE_EVENT, payload: event });
    setAlert(data);
  } catch (ex) {
    setError(ex);
  }
};