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
                  <Text style={{fontSize: 20, fontFamily: 'Baloo', color:'red'}}>{this.props.points}olaa</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
    );
  }
}

