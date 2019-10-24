import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native'
import { Col, Row, Thumbnail, Text, Button, Grid } from 'native-base';

class Calculator extends Component {
  render() {
    return (
      <Grid style={{backgroundColor: '#E7E7E7'}}>
        <Row size={30}>
          <Col style={{alignItems: 'center', justifyContent: 'center'}}>
            <Thumbnail large source={{uri:this.props.image}} />
          </Col>
          <Col>
            <Row size={2} style={{ width:'90%', alignSelf: 'center'}}>
              <Text style={styles.nameText}>{this.props.name}</Text>
            </Row>
            <Row size={3} style={styles.pointsRow}>
              <TextInput editable  style={styles.textInput} maxLength={7} />
            </Row>
            <Row size={1} style={{margin: 10, justifyContent:'space-between'}}>
              <Button style={[{backgroundColor: '#3D88A9'},styles.addOrSubButton]}>
                <Text style={[styles.buttonText, {fontSize: 15}]}>SUMAR</Text>
              </Button>
              <Button style={[{backgroundColor: '#ED6A6A'},styles.addOrSubButton]}>
                <Text style={[styles.buttonText, {fontSize: 15}]}>RESTAR</Text>
              </Button>
            </Row>
          </Col>
        </Row>
        <Row size={80}>
          <Col>
            <Row size={1} style={{margin: 10, justifyContent:'space-between'}}>
              <Button>
                <Text style={styles.buttonText}>+1</Text>
              </Button>
              <Button>
                <Text style={styles.buttonText}>+10</Text>
              </Button>
              <Button>
                <Text style={styles.buttonText}>+50</Text>
              </Button>
            </Row>
            <Row size={1}>
              <Button>
                <Text style={styles.buttonText}>-1</Text>
              </Button>
              <Button>
                <Text style={styles.buttonText}>-10</Text>
              </Button>
              <Button>
                <Text style={styles.buttonText}>-50</Text>
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
    marginTop: 10, 
    fontFamily: 'Baloo', 
    justifySelf: 'flex-start'
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
    width:'100%',
    textAlign:'right',
    fontSize: 35,
    fontFamily: 'Baloo',
    marginRight: 10
  },
  addOrSubButton: {
    width: '45%', 
    height: '90%',
    justifyContent:'center'
  },
  buttonText: {
    fontFamily: 'Baloo',
    fontSize: 25,
  }
})

export default Calculator;