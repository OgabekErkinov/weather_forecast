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
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
      ${isAlert ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`} >
      <div className="min-w-[260px] px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-400 
                      rounded-2xl shadow-lg shadow-blue-700 flex items-center justify-center">
        <h4 className="font-bold text-white text-lg">{message}</h4>
      </div>
    </div>
  );
};

export default AlertWindow;
