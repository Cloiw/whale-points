import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import InfoCard from '../InfoCard'

class ScoreTable extends Component {
  constructor(props){
    super(props)
    this.state = { users_table: []}
  }
  
  async componentDidMount () {
    try {
      const response = await fetch('https://whalepoints.herokuapp.com/users');
      const parseResponse = await response.json();
      console.log(parseResponse)
      this.setState({
        users_table: parseResponse
      })
    } catch(error) {
      console.log(error)
    }
  }
  render(){
    return (
      <Container style={{backgroundColor:'#E7E7E7'}}>
        <Content>
          {this.state.users_table.length === 0 ? null : 
          this.state.users_table.map(element => 
            <InfoCard key={element._id} ranking={1} image={element.profile_picture} name={element.name} points={57777}/>
          )} 
        </Content>
      </Container>
    )
  }
}

export default ScoreTable;