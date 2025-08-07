import springGif from '../assets/spring.jpg';
import summerGif from '../assets/summer.jpg';
import autumnGif from '../assets/autumn.jpg';
import winterGif from '../assets/winter.jpg';

export const season_picture = () => {
  const current_month = new Date().getMonth();

  if (current_month >= 2 && current_month <= 4) {
    return {gif : springGif, title : 'Spring'};
  } else if (current_month >= 5 && current_month <= 7) {
    return {gif : summerGif, title : 'Summer'};
  } else if (current_month >= 8 && current_month <= 10) {
    return {gif : autumnGif, title : 'Autumn'};
  } else {
    return {gif : winterGif, title : 'Winter' };
  }
};
