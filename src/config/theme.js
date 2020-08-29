import {whiteDark, blackLight, blackMedium, whiteMedium} from './colors';
import {darkMode} from '../../settings';

// Color Palette of the Specific Mobile App
const primaryColor = '';
const secondaryColor = '';

// Background colors
const lightColor = darkMode ? blackLight : whiteMedium;
const darkColor = darkMode ? blackMedium : whiteDark;

// Make the Palette available to the whole Application
export {primaryColor, secondaryColor, lightColor, darkColor};
