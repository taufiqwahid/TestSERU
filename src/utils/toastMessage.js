import {showMessage} from 'react-native-flash-message';
import {Colors} from './colors';

const toastMessage = (message, type) => {
  showMessage({
    message: message,
    type: type === 'success' ? 'success' : 'info',
    backgroundColor: type === 'success' ? Colors.default : Colors.red,
    icon: type === 'success' ? 'success' : 'info',
  });
};
export default toastMessage;
