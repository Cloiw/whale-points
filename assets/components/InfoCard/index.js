import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Right, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class InfoCard extends Component {
  render() {
    return (
          <Card>
            <CardItem>
              <Left>
                <Thumbnail large source={{uri:this.props.image}} />
                <Body>
                  <Text style={{fontSize: 30, fontFamily: 'Baloo'}}>{this.props.name}</Text>
                  <Text style={this.props.points < 0 ? styles.redText : styles.blueText}>{this.props.points} 🐳</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
    );
  }
}

const styles = StyleSheet.create({
  blueText: {
    fontSize: 20,
    fontFamily: 'Baloo',
    color: '#3D88A9'
  },
  redText: {
    fontSize: 20,
    fontFamily: 'Baloo',
    color: '#F10000'
  },
 
})
