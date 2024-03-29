import { UPDATE_PRODUCT, DELETE_PRODUCT } from "../types";

import setError from "../../utils/exceptions";
import setAlert from "../../utils/alerts";
import progressbar from "../../utils/uploadProgress";

export const add_Product = (
  formData,
  router,
  setFileUploadPercentage,
  setCoverUploadPercentage,
  fileUploadPercentage,
  coverUploadPercentage
) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/admin/products/add-product", formData, {
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
    return router.push("/admin-products");
  } catch (ex) {
    setError(ex);
  }
};

export const edit_Product = (formData, router) => async (
  dispatch,
  getState,
  api
) => {
  try {
    const { data } = await api.post("/admin/products/edit-product", formData, {
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
      dispatch({ type: UPDATE_PRODUCT, payload: data.product });
      setAlert(data);
      router.push("/");
    }
  } catch (ex) {
    setError(ex);
  }
};

export const deleteProduct = (product) => async (dispatch, getState, api) => {
  try {
    const { data } = await api.post("/admin/products/delete-product", product);
    if (data.success) dispatch({ type: DELETE_PRODUCT, payload: product });
    setAlert(data);
  } catch (ex) {
    setError(ex);
  }
};
