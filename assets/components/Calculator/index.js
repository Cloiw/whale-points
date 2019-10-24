import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Col, Row, Thumbnail, Text, Content, Grid } from 'native-base';

class Calculator extends Component {
  render() {
    return (
      <Grid style={{backgroundColor: 'white'}}>
        <Row size={20}>
          <Col style={{alignItems: 'center', justifyContent: 'center'}}>
            <Thumbnail large source={{uri:this.props.image}} />
          </Col>
          <Col>
            <Row size={1} style={{ width:'90%', alignSelf: 'center'}}>
              <Text style={styles.nameText}>{this.props.name}</Text>
            </Row>
            <Row size={2} style={styles.pointsRow}>
              <Text style={{fontSize: 40, fontFamily: 'Baloo', marginRight: 10}}>00005</Text>
            </Row>
          </Col>
        </Row>
        <Row size={80}>
          <Text>Oli</Text>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 20, 
    marginTop: 10, 
    fontFamily: 'Baloo', 
    justifySelf: 'flex-start'
  },
  pointsRow: {
    width:'90%', 
    backgroundColor:'#E7E7E7', 
    alignSelf: 'center', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    borderRadius: 10
  }
})

export default Calculator;