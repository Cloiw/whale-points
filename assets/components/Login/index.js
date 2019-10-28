import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Grid, Col, Row, Right } from 'native-base';


class Login extends Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: ""}
  }
  render() {
    console.log(this.state.username, this.state.password)
    return (
      <Container style={{backgroundColor:'#E7E7E7'}}>
        <Grid>
          <Row size={40} style={{justifyContent:'center', alignItems: 'center'}}>
            <Col>
              <Text style={{fontSize: 80, alignSelf: 'center'}} >🐳</Text>
              <Text style={{fontSize: 30, alignSelf: 'center', fontFamily: 'Baloo'}} >WhalePoints</Text>
            </Col>
          </Row>
          <Row size={25}  style={{alignItems:'center'}}>
            <Col>
              <Form style={{width:'90%', justifyContent:'center', alignSelf: 'center'}}>
                <Item style={styles.item} stackedLabel>
                  <Label style={styles.label}>Usuario</Label>
                  <Input onChangeText={val => this.setState({ username: val })} style={styles.input} />
                </Item>
                <Item style={styles.item} stackedLabel last>
                  <Label style={styles.label}>Contraseña</Label>
                  <Input secureTextEntry={true} onChangeText={val => this.setState({ password: val })} style={styles.input} />
                </Item>
              </Form>
            </Col>
          </Row>
          <Row size={35} style={{justifyContent:'center', alignItems: 'center'}}>
            <Button onPress={() => this.props.changeLoginStatus()}style={{backgroundColor: '#008AC5', width: '90%', height: '20%', alignSelf: 'flex-start'}}>
              <Text uppercase={false}>Entrar</Text>
            </Button>
          </Row>
        </Grid>
      </Container>
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