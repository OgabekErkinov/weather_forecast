import { useEffect } from "react";
import useAlert from "../states/alertState";

const AlertWindow = () => {
  const { message, isAlert, setIsAlert } = useAlert();

  useEffect(() => {
    if (isAlert) {
      const timer = setTimeout(() => {
        setIsAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isAlert, setIsAlert]);

  return (
    <div
      className={`absolute z-20 top-0 right-[40%] ${
        isAlert ? "block" : "hidden" }`}  >
     
        <div className="h-[100px] w-[260px] flex items-center justify-center bg-blue-400 rounded-2xl shadow-xs shadow-blue-600">
          <h4 className="font-bold text-blue-900 text-2xl">{message}</h4>
        </div>
     
    </div>
  );
};

export default AlertWindow;
