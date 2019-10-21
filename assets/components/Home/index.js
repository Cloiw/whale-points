import React from 'react';
import { Image } from 'react-native';
import { Container, Text, Header, Grid, TabHeading, Row, Button, Icon, Col, Content, Tab, Tabs, Thumbnail } from 'native-base';
import ScoreTable from '../ScoreTable';
import Login from '../Login'

const Home = () => (

  <Container style={{backgroundColor:'#E7E7E7'}}>
    <Grid>
    <Row size={20} style={{justifyContent:'center', alignItems: 'center'}}>
      <Col>
        <Thumbnail large source={require('../../icon.png')} style={{alignSelf: 'center'}} />
      </Col>
      <Col>
        <Text style={{fontSize: 30, alignSelf: 'center', fontFamily: 'Baloo'}} >Nombre</Text>
        <Text style={{fontSize: 30, alignSelf: 'flex-end', fontFamily: 'Baloo'}} >500</Text>
      </Col>
    </Row>
    <Row size={80} style={{}}>
        <Tabs style={{backgroundColor: '#008AC5'}}>
          <Tab heading={ 
            <TabHeading>
              <Icon type="MaterialCommunityIcons" name="table-of-contents" />
              <Text></Text>
            </TabHeading>}>
            <ScoreTable />
          </Tab>
          <Tab heading={ 
            <TabHeading>
              <Icon type="MaterialCommunityIcons" name="calculator-variant" />
              <Text></Text>
            </TabHeading>}>
            <Login />
          </Tab>
          <Tab heading={ 
            <TabHeading>
              <Icon type="AntDesign" name="exclamationcircle" />
              <Text></Text>
            </TabHeading>}>
            <ScoreTable />
          </Tab>
          <Tab heading={ 
            <TabHeading>
              <Icon type="MaterialIcons" name="history" />
              <Text></Text>
            </TabHeading>}>
            <ScoreTable />
          </Tab>
        </Tabs>
        </Row>
        </Grid>
      </Container>
)

export default Home;