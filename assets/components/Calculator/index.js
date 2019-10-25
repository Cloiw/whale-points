import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native'
import { Col, Row, Thumbnail, Text, Button, Grid, Input } from 'native-base';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { points : 0 }
  }
  render() {
    return (
      <Grid style={{backgroundColor: '#E7E7E7'}}>
        <Row size={40}>
          <Col style={{alignItems: 'center', justifyContent: 'center'}}>
            <Thumbnail large source={{uri:this.props.image}} />
          </Col>
          <Col>
            <Row size={2} style={{ width:'90%', alignSelf: 'center'}}>
              <Text style={styles.nameText}>{this.props.name}</Text>
            </Row>
            <Row size={3} style={styles.pointsRow}>
              <Text style={styles.textInput}>{this.state.points}</Text>
            </Row>
          </Col>
        </Row>
        <Row size={60}>
          <Col>
            <Row size={1} style={{margin: 10, justifyContent:'space-between'}}>
              <Button style={[styles.buttonCalculator, {backgroundColor: '#3D88A9'}]}>
                <Text style={styles.buttonText}>+1</Text>
              </Button>
              <Button style={[styles.buttonCalculator, {backgroundColor: '#3D88A9'}]}>
                <Text style={styles.buttonText}>+10</Text>
              </Button>
              <Button style={[styles.buttonCalculator, {backgroundColor: '#3D88A9'}]}>
                <Text style={styles.buttonText}>+50</Text>
              </Button>
              <Button style={[styles.buttonCalculator, {backgroundColor: '#3D88A9'}]}>
                <Text style={styles.buttonText}>+100</Text>
              </Button>
            </Row>
            <Row size={1} style={{margin: 10, justifyContent:'space-between'}}>
              <Button style={[styles.buttonCalculator, {backgroundColor: '#ED6A6A'}]}>
                <Text style={styles.buttonText}>-1</Text>
              </Button>
              <Button style={[styles.buttonCalculator, {backgroundColor: '#ED6A6A'}]}>
                <Text style={styles.buttonText}>-10</Text>
              </Button>
              <Button style={[styles.buttonCalculator, {backgroundColor: '#ED6A6A'}]}>
                <Text style={styles.buttonText}>-50</Text>
              </Button>
              <Button style={[styles.buttonCalculator, {backgroundColor: '#ED6A6A'}]}>
                <Text style={styles.buttonText}>-100</Text>
              </Button>
            </Row>
            <Row size={2}>
              <Text>VOLVER</Text>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 20, 
    margin: 10, 
    fontFamily: 'Baloo',
    alignSelf: 'center'
  },
  pointsRow: {
    width:'90%', 
    backgroundColor:'white', 
    alignSelf: 'center', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    borderRadius: 10
  },
  textInput: {
    width:'80%',
    textAlign: 'right',
    fontSize: 35,
    fontFamily: 'Baloo',
    margin: 10
  },
  buttonCalculator: {
    flex: 1,
    justifyContent:'center',
    height: '80%',
    margin: '1%'
  },
  buttonText: {
    fontFamily: 'Baloo',
    fontSize: 14,
  }
})

export default Calculator;