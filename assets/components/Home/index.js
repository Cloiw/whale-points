import React from 'react';
import { Container, Text, Header, Body, TabHeading, Right, Button, Icon, Title, Content, Tab, Tabs } from 'native-base';
import ScoreTable from '../ScoreTable';
import Login from '../Login'

const Home = () => (

  <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading={ 
            <TabHeading>
              <Icon type="MaterialCommunityIcons" name="table-of-contents" />
              <Text>Puntajes</Text>
            </TabHeading>}>
            <ScoreTable />
          </Tab>
          <Tab  heading={ 
            <TabHeading>
              <Icon type="MaterialCommunityIcons" name="calculator-variant" />
              <Text>Puntos</Text>
            </TabHeading>}>
            <Login />
          </Tab>
        </Tabs>
      </Container>
)

export default Home;