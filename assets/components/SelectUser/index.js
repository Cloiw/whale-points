import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, Text, Row } from 'native-base';
import UserNamePhotoCard from '../UserNamePhotoCard';
import Calculator from '../Calculator';

class SelectUser extends Component {
  constructor(props){
    super(props);
    this.state = { changeView: false };
    this.changeView = this.changeView.bind(this)
    this.recoverView = this.recoverView.bind(this)
  }

  changeView(data, image) {
    console.log(data, this.state.changeView)
    this.setState({
      changeView : !this.state.changeView,
      image: image
    })
  }

  recoverView() {
    if (this.props.tabPosition != 1 ) {
      console.log("funcion")
      this.setState({
        changeView: false
      })
    }
  }

  render(){
    this.recoverView()
    return(
      <Container style={{backgroundColor:'#E7E7E7'}}>
        {!this.state.changeView  ? (
          <Content>
            <Text style={{fontSize: 20, fontFamily: 'Baloo', marginLeft: 10, marginTop: 10, color: '#3D88A9'}}>Selecciona un usuario</Text>
            <Row style={{flexWrap:'wrap', width:'100%', justifyContent:'center'}}>
              <TouchableOpacity style={{width: '45%', margin:'1%'}} onPress={() => this.changeView("cloiwclon1", 'https://i.ibb.co/z5h63TR/lokibb.jpg')}>
                <UserNamePhotoCard image={'https://i.ibb.co/z5h63TR/lokibb.jpg'} name={"cloiwclon1"} />
              </TouchableOpacity>
              <TouchableOpacity style={{width: '45%', margin:'1%'}} onPress={() => console.log("ola2")}>
                <UserNamePhotoCard image={'https://i.ibb.co/z5h63TR/lokibb.jpg'} name={"cloiwc lon1"} />
              </TouchableOpacity>
              <TouchableOpacity style={{width: '45%', margin:'1%'}} onPress={() => console.log("ola3")}>
                <UserNamePhotoCard image={'https://i.ibb.co/z5h63TR/lokibb.jpg'} name={"cloiwc lon1"} />
              </TouchableOpacity>
            </Row>
          </Content> 
          ) : <Calculator image={this.state.image} name="nombreee" />
        }
      </Container>
    )
  }
}

export default SelectUser;