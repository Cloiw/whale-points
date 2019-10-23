import React, { Component } from 'react';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

class UserNamePhotoCard extends Component {
  render() {
    return (
      <Card>
        <CardItem style={{alignSelf: 'center'}}>
          <Thumbnail large source={{uri:this.props.image}} />
        </CardItem>
        <CardItem style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 20, fontFamily: 'Baloo'}}>{this.props.name}</Text>
        </CardItem>
      </Card>
    );
  }
}

export default UserNamePhotoCard;