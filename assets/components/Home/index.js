import React from 'react';
import { Container, Text, Header, Body, Left, Right, Button, Icon, Title } from 'native-base';

const Home = () => (

  <Container>
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right />
    </Header>
    <Text>bleblelele</Text>
  </Container>
)

export default Home;