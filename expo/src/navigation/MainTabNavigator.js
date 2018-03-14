import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'

import Colors from '../constants/Colors'

import HomeScreen from '../containers/HomeScreen'
import LinksScreen from '../containers/LinksScreen'
import SettingsScreen from '../containers/SettingsScreen'

import FeedPage from '../containers/FeedPage'
import DraftsPage from '../containers/DraftsPage'
import CreatePage from '../containers/CreatePage'
import DetailPage from '../containers/DetailPage'

const PostStack = TabNavigator({
  FeedPage: {
    screen: FeedPage
  },
  DraftsPage: {
    screen: DraftsPage
  },
  CreatePage: {
    screen: CreatePage
  },
  DetailPage: {
    screen: DetailPage
  }
})

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Links: {
      screen: LinksScreen
    },
    Settings: {
      screen: SettingsScreen
    },
    PostStack: {
      screen: PostStack
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle'
            break
          case 'Links':
            iconName =
              Platform.OS === 'ios'
                ? `ios-link${focused ? '' : '-outline'}`
                : 'md-link'
            break
          case 'Settings':
            iconName =
              Platform.OS === 'ios'
                ? `ios-options${focused ? '' : '-outline'}`
                : 'md-options'
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
)
