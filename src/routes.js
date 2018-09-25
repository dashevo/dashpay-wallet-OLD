/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { SplashScreen } from 'containers';
import { HomeScreen } from 'containers';
import enhance from 'enhancer';

type Routes = {};

let routes: Routes = [
  {
    name: 'SplashScreen',
    component: SplashScreen
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
