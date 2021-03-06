import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile94406Navigator from '../features/UserProfile94406/navigator';
import Tutorial94405Navigator from '../features/Tutorial94405/navigator';
import NotificationList94377Navigator from '../features/NotificationList94377/navigator';
import Settings94376Navigator from '../features/Settings94376/navigator';
import Settings94368Navigator from '../features/Settings94368/navigator';
import UserProfile94366Navigator from '../features/UserProfile94366/navigator';
import BlankScreen094344Navigator from '../features/BlankScreen094344/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile94406: { screen: UserProfile94406Navigator },
Tutorial94405: { screen: Tutorial94405Navigator },
NotificationList94377: { screen: NotificationList94377Navigator },
Settings94376: { screen: Settings94376Navigator },
Settings94368: { screen: Settings94368Navigator },
UserProfile94366: { screen: UserProfile94366Navigator },
BlankScreen094344: { screen: BlankScreen094344Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
