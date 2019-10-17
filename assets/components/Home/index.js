import React from 'react';
import { Container, Text, Header, Body, Left, Right, Button, Icon, Title, Content, Tab, Tabs } from 'native-base';
import ScoreTable from '../ScoreTable';
import Login from '../Login'

const Home = () => (

  <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Puntajes">
            <ScoreTable />
          </Tab>
          <Tab heading="+ - Puntos">
            <Login />
          </Tab>
        </Tabs>
      </Container>
)

export default Home;