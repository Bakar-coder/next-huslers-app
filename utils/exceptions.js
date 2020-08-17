import { toast } from "react-toastify";

export default (ex) => {
  if (
    (ex && ex.response && ex.response.data && ex.response.status >= 400) ||
    (ex && ex.response && ex.response.data && ex.response.status <= 500)
  ) {
    const errorMsg = ex.response.data["msg"] || ex.message;
    toast.error(errorMsg);
  } else if (ex && ex.msg) {
    toast.warn(ex.msg);
  } else {
    toast.error(`Something is wrong. - ${ex.message}`);
  }
};
