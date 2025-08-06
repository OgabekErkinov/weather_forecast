export const getCurrentLocation = (setIsAlert, setMessage) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
        resolve(coords);
      },
      (err) => {
        setIsAlert(true)
        setMessage("Joylashuvni aniqlab bo'lmadi")
        resolve('Tashkent'); // Default
      }
    );
  });
};
