/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { SplashScreen } from 'containers';
import { HomeScreen } from 'containers';
import { Balance } from 'containers';
import { i18n } from './experimental';
import enhance from 'enhancer';

type Routes = {};

let routes: Routes = [
  {
    name: 'SplashScreen',
    component: i18n
  },
  {
    name: 'HomeScreen',
    component: HomeScreen
  }
];

routes = routes.map(({ name, component }) => ({
  component: enhance(component),
  name: name
}));

export default routes;
