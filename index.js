/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Vocalization from './Vocalization';

AppRegistry.registerComponent(appName, () => Vocalization);