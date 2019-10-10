import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Grid, Col, Row } from 'native-base';

class Login extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Row size={40} style={{justifyContent:'center', alignItems: 'center'}}>
            <Col>
            <Text style={{fontSize: 80, alignSelf: 'center'}} >🐳</Text>
            <Text style={{fontSize: 30, alignSelf: 'center', fontFamily: 'Baloo'}} >WhalePoints</Text>
            </Col>
          </Row>
        <Row size={60}  style={{alignItems:'flex-end'}}>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button>
              <Text>Login</Text>
            </Button>
        </Content>
        </Row>
      </Grid>
    </Container>
    );
  }
}

export default Login