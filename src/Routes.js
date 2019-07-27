import React from 'react';
import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';

import Menu from './components/Menu'
import Home from './pages/Home'
import Details from './pages/Details'
import commonStyles from './commonStyles'

const MenuRoutes = {
    Home: {
        name: 'Home',
        screen: props =>
            <Home {...props} />,
        navigationOptions: {
            title: 'Home'
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Home',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontWeight: 'normal',
            color: commonStyles.colors.mainText,
            fontSize: commonStyles.font.fontSize.menu
        },
        activeLabelStyle: {
            color: commonStyles.colors.primary,
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)
const MainRoutes = {
    Home: {
        name: 'Home',
        screen: MenuNavigator
    },
    Details: {
        name: 'Details',
        screen: Details
    }
}

const MainNavigator = createStackNavigator(MainRoutes, {
    initialRouteName: 'Home',
    headerMode: 'none'
})

const App = createAppContainer(MainNavigator);

export default App;