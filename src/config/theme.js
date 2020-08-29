import {whiteLight, whiteDark, blackLight, blackDark} from './colors';
import {darkMode} from '../../settings';

// Color Palette of the Specific Mobile App
const primaryColor = '';
const secondaryColor = '';

// Light Mode
const lightColor = darkMode ? blackLight : whiteLight;
const darkColor = darkMode ? blackDark : whiteDark;

// Make the Palette available to the whole Application
export {primaryColor, secondaryColor, lightColor, darkColor};
