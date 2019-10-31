import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Content, Text, Row } from 'native-base';
import UserNamePhotoCard from '../UserNamePhotoCard';
import Calculator from '../Calculator';

class SelectUser extends Component {
  constructor(props){
    super(props);
    this.state = { changeView: false, users: [] };
    this.changeView = this.changeView.bind(this)
  }

  changeView(name, image) {
    this.setState({
      imageReceiver: image,
      nameReceiver: name,
      changeView: !this.state.changeView
    })
  }

  async componentDidMount () {
    try {
      const response = await fetch('https://whalepoints.herokuapp.com/users');
      const parseResponse = await response.json();
      const getData = await AsyncStorage.getItem('userData')
      const jsonData = JSON.parse(getData)
      const token = jsonData.token
      const activeUser = jsonData.user.username

      // const pointsResponse = await fetch(`https://whalepoints.herokuapp.com/points/${activeUser}`, {
      //   method: 'GET',
      //   headers: {
      //     'Autorization' : token,
      //     'Content-Type': 'application/json'
      //   }
      // })

      this.setState({
        users: parseResponse,
        token: token,
        activeUser: activeUser
      })
      
      
    } catch(error) {
      console.log(error)
    }
  }

  render(){
    return(
      <Container style={{backgroundColor:'#E7E7E7'}}>
        {!this.state.changeView ? (
          <Content>
            <Text style={{fontSize: 20, fontFamily: 'Baloo', marginLeft: 10, marginTop: 10, color: '#3D88A9'}}>Selecciona un usuario</Text>
            <Row style={{flexWrap:'wrap', width:'100%', justifyContent:'center'}}>
              {this.state.users.length === 0 ? null : 
              this.state.users.map(element => 
                <TouchableOpacity style={{width: '45%', margin:'1%'}} onPress={() => this.changeView(element.name, element.profile_picture)}>
                  <UserNamePhotoCard image={element.profile_picture} name={element.name} />
                </TouchableOpacity>
              )} 
            </Row>
          </Content> 
          ) : <Calculator imageReceiver={this.state.imageReceiver} nameReceiver={this.state.nameReceiver} token={this.state.token}  /> }
      </Container>
    )
  }
}

export default SelectUser;