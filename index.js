import {AppRegistry, Platform} from 'react-native';
import {App} from './src/App';
import {AndroidAuto, AndroidAutoModule} from './src/AndroidAuto';
import {name as appName} from './app.json';

if (Platform.OS === 'android') {
  AppRegistry.registerRunnable(appName, AndroidAutoModule);
  AppRegistry.registerComponent(appName, () => AndroidAuto);
  // AppRegistry.registerRunnable('androidAuto', AndroidAutoModule);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
