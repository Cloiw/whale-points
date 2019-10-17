import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Home from './assets/components/Home';
import Login from './assets/components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isLogin: false,
    };
    this.changeLogin = this.changeLogin.bind(this)
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Baloo: require('./assets/fonts/Baloo-Regular.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  changeLogin() {
    console.log("change view")
    this.setState({
      isLogin: true
    })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      this.state.isLogin ? <Home /> : <Login changeLoginStatus={this.changeLogin} />
    );
  }
}

export default App;
