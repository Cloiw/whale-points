import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native'
import { Col, Row, Thumbnail, Text, Button, Grid} from 'native-base';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { points : 0 }
    this.calculator = this.calculator.bind(this)
    this.calculatorAddButtons = [1, 10, 50, 100]
    this.calculatorSubButtons = [-1, -10, -50, -100]
  }

  calculator(value) {
    if (value === 'reset') {
      return this.setState({
        points: 0
      })

    }
    this.setState({
      points: this.state.points + value})
  }
  
  render() {
    return (
      <Grid style={{backgroundColor: '#E7E7E7'}}>
        <Row size={2}>
          <Col style={{alignItems: 'center', justifyContent: 'flex-end'}}>
            <Thumbnail square large source={{uri:this.props.image}} style={{borderRadius: 10}} />
          </Col>
          <Col>
            <Row size={2} style={{ width:'90%', alignSelf: 'center'}}>
              <Text style={styles.nameText}>{this.props.name}</Text>
            </Row>
            <Row size={2} style={styles.pointsRow}>
              <Text style={styles.textInput}>{this.state.points}</Text>
            </Row>
          </Col>
        </Row>
        <Row size={3}>
          <Col style={{margin: 10}}>
            <Row size={1} style={{justifyContent:'space-between', alignItems: 'center'}}>
              {this.calculatorAddButtons.map(element => 
              <Button key={element} onPress={() => this.calculator(element)} style={[styles.buttonCalculator, {backgroundColor: '#3D88A9'}]}>
                <Text style={styles.buttonText}>+{element}</Text>
              </Button>
              )}
            </Row>
            <Row size={1} style={{justifyContent:'space-between', alignItems: 'center'}}>
              {this.calculatorSubButtons.map(element => 
              <Button key={element} onPress={() => this.calculator(element)} style={[styles.buttonCalculator, {backgroundColor: '#ED6A6A'}]}>
                <Text style={styles.buttonText}>{element}</Text>
              </Button>
              )}
            </Row>
          </Col>
        </Row>
        <Row size={1} style={{marginRight:10, marginLeft: 10}}>
          <Button  onPress={() => this.calculator('reset') }style={[styles.buttonCalculator, {backgroundColor: 'gray'}]}>
            <Text style={styles.buttonText}>Reset</Text>
          </Button>
        </Row>
        <Row size={3} style={{margin:10, alignItems:'center', justifyContent: 'space-between'}}>
          <Button style={[styles.buttonCalculator, {height: '25%', backgroundColor: 'gray', marginRight: 20}]}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </Button>
          <Button style={[styles.buttonCalculator, {height: '25%', backgroundColor: '#008AC5', marginLeft: 20}]}>
            <Text style={styles.buttonText}>Enviar</Text>
          </Button>
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