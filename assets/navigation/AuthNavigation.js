import { createStackNavigator } from 'react-navigation-stack'
import Login from '../components/Login'
import Signup from '../components/Signup'

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default AuthNavigation