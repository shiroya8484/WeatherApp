/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import './app/services/NotificationServices';



AppRegistry.registerComponent(appName, () => App);
