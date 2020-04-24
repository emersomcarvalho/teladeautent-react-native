import { createAppContainer, createStackNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';

 //import Home from './pages/Home';
import Login from './pages/Login';

const Routes = createAppContainer(
    createBottomTabNavigator({
        Login: Login,
       //Home: Home,
    })
  );
  
  export default Routes;