import { UPDATE_PRODUCT, DELETE_PRODUCT, GET_PROMOS } from "../types";

import setError from "../../utils/exceptions";
import setAlert from "../../utils/alerts";
import progressbar from "../../utils/uploadProgress";

export const add_media = (
  formData,
  router,
  setFileUploadPercentage,
  setCoverUploadPercentage,
  fileUploadPercentage,
  coverUploadPercentage
) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/media/add-media", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (event) =>
        progressbar(
          event,
          setFileUploadPercentage,
          setCoverUploadPercentage,
          fileUploadPercentage,
          coverUploadPercentage
        ),
    });
    setAlert(data);
    return router.push("/");
  } catch (ex) {
    setError(ex);
  }
};

export const edit_media = (formData, router) => async (
  dispatch,
  getState,
  api
) => {
  try {
    const { data } = await api.post("/media/edit-media", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (event) =>
        progressbar(
          event,
          setFileUploadPercentage,
          setCoverUploadPercentage,
          fileUploadPercentage,
          coverUploadPercentage
        ),
    });
    if (data.success) {
      dispatch({ type: UPDATE_PRODUCT, payload: data.media });
      setAlert(data);
      router.push("/");
    }
  } catch (ex) {
    setError(ex);
  }
};

export const deleteMedia = (media) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/media/delete-media", media);
    if (data.success) dispatch({ type: DELETE_PRODUCT, payload: media });
    setAlert(data);
  } catch (ex) {
    setError(ex);
  }
};

export const add_promo = (
  formData,
  router,
  setFileUploadPercentage,
  setCoverUploadPercentage,
  fileUploadPercentage,
  coverUploadPercentage
) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/media/add-promo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (event) =>
        progressbar(
          event,
          setFileUploadPercentage,
          setCoverUploadPercentage,
          fileUploadPercentage,
          coverUploadPercentage
        ),
    });
    setAlert(data);
    return router.push("/");
  } catch (ex) {
    setError(ex);
  }
};

export const deletePromo = (promo) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/media/delete-promo", promo);
    if (data.success) dispatch({ type: DELETE_PROMOTION, payload: promo });
    setAlert(data);
  } catch (ex) {
    setError(ex);
  }
};
