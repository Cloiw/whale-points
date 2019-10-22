import React from 'react';
import { Container, Content, Text, Row } from 'native-base';
import UserNamePhotoCard from '../UserNamePhotoCard'

const SelectUser = () => (

  <Container style={{backgroundColor:'#E7E7E7'}}>
      <Text style={{fontSize: 20, fontFamily: 'Baloo', marginLeft: 10, marginTop: 10, color: '#3D88A9'}}>Selecciona un usuario</Text>
      <Content>
        <Row style={{flexWrap:'wrap', justifyContent:'center'}}>
          <UserNamePhotoCard image={'https://i.ibb.co/z5h63TR/lokibb.jpg'} name={"cloiwc lon1"} />
          <UserNamePhotoCard image={'https://i.ibb.co/z5h63TR/lokibb.jpg'} name={"cloiwclon2"} />
          <UserNamePhotoCard image={'https://i.ibb.co/z5h63TR/lokibb.jpg'} name={"cloiwclon3"} />
        </Row>
      </Content>
  </Container>
)

export default SelectUser;