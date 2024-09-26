import { toast } from "react-toastify";

const toastFs = ( message, type ) => {
    
  const showToast = (msg, type) => {
    switch (type) {
      case "success":
        toast.success(msg, toastConfig);
        break;
      case "info":
        toast.info(msg, toastConfig);
        break;
      case "warning":
        toast.warn(msg, toastConfig);
        break;
      case "error":
      default:
        toast.error(msg, toastConfig);
        break;
    }
  };

  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  showToast(`${message}!`, type);
};

export default toastFs;
