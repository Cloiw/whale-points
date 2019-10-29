import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { AsyncStorage, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Container, Content, Spinner, Form, Item, Input, Label, Button, Text, Grid, Col, Row, Right } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



class Login extends Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: "", errormsg: ""}
  }

  _signIn = async () => {
    this.setState({errormsg : '', loading: true})
    try {
      let response = await fetch('https://whalepoints.herokuapp.com/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      })
      let parseResponse = await response.json();
      if( response.status === 401){
        this.setState({errormsg : 'Usuario o contraseña incorrecta', loading: false})
      }
      else if(response.status === 200){
        await AsyncStorage.setItem('userToken', parseResponse.token);
        this.props.navigation.navigate('App');
      }
      else {
        this.setState({ errormsg : 'Servidor no disponible', loading: false })
      }
    } catch (error) {
      console.log("Error", error)
      this.setState({ loading: false })
    }
  };
  
  render() {
    return (
      <KeyboardAvoidingView enable behavior="padding" keyboardVerticalOffset={10} style={{ flex: 1, backgroundColor:'#E7E7E7' }}>
        <ScrollView>
          <Container style={{backgroundColor:'#E7E7E7'}}>
            <Grid>
              <Row size={4} style={{justifyContent:'center', alignItems: 'center'}}>
                <Col>
                  <Text style={{fontSize: 80, alignSelf: 'center'}} >🐳</Text>
                  <Text style={{fontSize: 30, alignSelf: 'center', fontFamily: 'Baloo'}} >WhalePoints</Text>
                </Col>
              </Row>
              <Row size={1} style={{justifyContent:'center', alignSelf: 'center'}}>
              {this.state.loading ? <Spinner color='blue' /> : null}
              {this.state.errormsg != null ? (<Text style={[styles.label,{color: '#cd0000', alignSelf: 'center'}]}>{this.state.errormsg}</Text>): null}
              </Row>
              <Row size={3}>
                <Col>
                  <Form style={{width:'90%', alignSelf: 'center'}}>
                    <Item style={styles.item} stackedLabel>
                      <Label style={styles.label}>Usuario</Label>
                      <Input editable={this.state.loading ? false : true} onChangeText={val => this.setState({ username: val })} style={styles.input} />
                    </Item>
                    <Item style={styles.item} stackedLabel last>
                      <Label style={styles.label}>Contraseña</Label>
                      <Input editable={this.state.loading ? false : true} secureTextEntry={true} onChangeText={val => this.setState({ password: val })} style={styles.input} />
                    </Item>
                  </Form>
                </Col>
              </Row>
              <Row size={3} style={{justifyContent:'center', alignItems: 'center'}}>
                <Button onPress={() => this._signIn()}style={{backgroundColor: '#008AC5', width: '90%', height: '25%', alignSelf: 'flex-start'}}>
                  <Text uppercase={false}>Entrar</Text>
                </Button>
              </Row>
            </Grid>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 5,
    backgroundColor: 'white'
  },
  item: {
    marginLeft: 0,
    paddingLeft: 0
  },
  label: {
    fontFamily: 'Baloo',
  }
})

export default Login