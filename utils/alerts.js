import { toast } from "react-toastify";
export default (data, user) =>
  user
    ? toast.success(`welcome back - ${user.firstName} ${user.lastName}`)
    : toast.success(data["msg"]);
