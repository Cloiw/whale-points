import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthNavigation from '../AuthNavigation'
import AppNavigation from '../AppNavigation'
import AuthLoadingScreen from '../AuthLoadingScreen'

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation,
    AuthLoading: AuthLoadingScreen,
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer