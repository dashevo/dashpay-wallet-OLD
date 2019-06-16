import { NavigationState, NavigationScreenProp } from 'react-navigation';

type Navigation = NavigationScreenProp<NavigationState>;

export type NavigationProps = {
  navigation: Navigation
}

export default Navigation;
