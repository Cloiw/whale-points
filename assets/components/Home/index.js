import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Text, Header, Grid, TabHeading, Row, Button, Icon, Col, Content, Tab, Tabs, Thumbnail } from 'native-base';
import ScoreTable from '../ScoreTable';
import SelectUser from '../SelectUser'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { currentTabPosition: 0};
    this.getPositionTab = this.getPositionTab.bind(this);
    
  }
  
  getPositionTab(i) {
    this.setState({
      currentTabPosition: i
    })
  }

  render(){
    return (
      <Container style={{backgroundColor:'#E7E7E7'}}>
        <Grid>
          <Row size={20} style={{ backgroundColor: '#008AC5', height: '100%'}}>
            <Col style={styles.headerThumbailColumn}>
              <Thumbnail large source={{uri:'https://i.ibb.co/z5h63TR/lokibb.jpg'}} style={styles.thumbnail} />
              <Row size={1}>
              <Content></Content>
              </Row>
              <Row size={1}>
                <Content style={styles.whiteBackground}></Content>
              </Row>
            </Col>
            <Col style={styles.headerInfoColumn}>
              <Row size={1}>
                <Text style={{fontSize: 30, alignSelf: 'center', fontFamily: 'Baloo', color: 'white'}} >Nombre</Text>
              </Row>
              <Row size={1} style={{justifyContent: 'flex-end', backgroundColor: 'white'}}>
                <Text style={{fontSize: 30, fontFamily: 'Baloo', marginRight:10, alignSelf: 'center'}} >50000</Text>
              </Row>
            </Col>
          </Row>
          <Row size={80} style={{}}>
            <Tabs scrollWithoutAnimation={true} initialPage={0} locked={true} onChangeTab={({ i }) => this.getPositionTab(i)}>
              <Tab  heading={ 
                <TabHeading style={styles.tabs}>
                  <Icon type="FontAwesome" name="list" />
                </TabHeading>}>
                <ScoreTable />
              </Tab>
              <Tab heading={ 
                <TabHeading style={styles.tabs}>
                  <Icon type="MaterialCommunityIcons" name="calculator-variant" />
                </TabHeading>}>
                  {this.state.currentTabPosition === 1 && 
                  <SelectUser tabPosition={this.state.currentTabPosition} /> }
              </Tab>
              <Tab heading={ 
                <TabHeading style={styles.tabs}>
                  <Icon type="FontAwesome" name="exclamation-circle" />
                </TabHeading>}>
                <ScoreTable />
              </Tab>
              <Tab heading={ 
                <TabHeading style={styles.tabs}>
                  <Icon type="FontAwesome" name="history" />
                </TabHeading>}>
                <ScoreTable />
              </Tab>
            </Tabs>
          </Row>
        </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    alignSelf: 'center', 
    borderColor: 'white',
    borderWidth: 2,
    position: 'absolute',
    zIndex: 2
  },
  whiteBackground: {
    backgroundColor: 'white',
  },
  headerThumbailColumn: {
    height: '100%',
    justifyContent: 'center'
  },
  headerInfoColumn: {
    height: '100%',
    justifyContent: 'flex-end'
  },
  tabs: {
    backgroundColor:'#008AC5',
  }
})

export default Home;