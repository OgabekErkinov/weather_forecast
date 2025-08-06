import springGif from '../assets/spring.gif';
import summerGif from '../assets/summer.gif';
import autumnGif from '../assets/autHome.gif';
import winterGif from '../assets/winter.webp';

export const season_picture = () => {
  const current_month = new Date().getMonth();

  if (current_month >= 2 && current_month <= 4) {
    return springGif;
  } else if (current_month >= 5 && current_month <= 7) {
    return summerGif;
  } else if (current_month >= 8 && current_month <= 10) {
    return autumnGif;
  } else {
    return winterGif;
  }
};
