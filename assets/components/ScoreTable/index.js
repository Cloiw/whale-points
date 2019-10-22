import React from 'react';
import { Container, Content } from 'native-base';
import InfoCard from '../InfoCard'

const ScoreTable = () => (

  <Container style={{backgroundColor:'#E7E7E7'}}>
    <Content>
      <InfoCard ranking={1} image={'https://i.ibb.co/z5h63TR/lokibb.jpg'} name={"cloiw"} points={57777}/>
      <InfoCard ranking={2} image={'https://i.ibb.co/z5h63TR/lokibb.jpg'} name={"cloiwclon"} points={-577}/>
    </Content>
  </Container>
)

export default ScoreTable;