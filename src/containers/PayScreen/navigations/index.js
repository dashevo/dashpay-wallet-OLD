// @flow
import { createStackNavigator } from 'react-navigation';
import routes from './routes';
import config from './config';

export default createStackNavigator(routes, config);
