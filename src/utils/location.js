export const getCurrentLocation = (setIsAlert, setMessage) => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        try {
          const res = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`);
          const data = await res.json();
          const city = data?.address?.city || data?.address?.town || 'Tashkent';
          resolve(city);
        } catch {
          resolve('Tashkent');
        }
      },
      (err) => {
        setIsAlert(true);
        setMessage("Joylashuvni aniqlab bo'lmadi");
        resolve('Tashkent');
      }
    );
  });
};
