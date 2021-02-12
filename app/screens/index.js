// Imports
import { Navigation } from 'react-native-navigation';

// Screens
import NavigationBottom from './navigationBottom';
//
export default function navigationBottom() {
  Navigation.registerComponent('NavigationBottom', () => NavigationBottom);
}
