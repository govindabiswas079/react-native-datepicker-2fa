import { AppRegistry } from 'react-native';
import App from './App';
import DownloadFile from './DownloadFile';
import MultipleDatePicker from './MultipleDatePicker';
import DevicePhoneNumber from './DevicePhoneNumber';
import VideoPlayer from './VideoPlayer';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MultipleDatePicker);
