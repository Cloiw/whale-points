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
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      this.state.isLogin ? <Home /> : <Login />
    );
  }
}

export default App;
