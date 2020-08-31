import {
  whiteDark,
  blackLight,
  blackMedium,
  whiteMedium,
  greenDark,
  greenLight,
} from './colors';
import {darkMode} from '../../settings';

// Color Palette of the Specific Mobile App
const primaryColor = greenDark;
const secondaryColor = greenLight;

// Background colors
const lightColor = darkMode ? blackLight : whiteMedium;
const darkColor = darkMode ? blackMedium : whiteDark;

// Make the Palette available to the whole Application
export {primaryColor, secondaryColor, lightColor, darkColor};
