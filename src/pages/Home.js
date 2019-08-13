import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Dropdown,Button,Collapse} from 'react-bootstrap';
import api from './../api'
class Home extends React.Component {
  state = {
    loading:true,
    persons: []
  }
  componentDidMount() {
    document.title = "Home";
    api.getData('params')
    .then(res => {
      const persons = res.data;
      
      return this.setState({ persons ,loading:false});
    })
  }
    render() {
      

      return (
      <div>
        
        <h1>Home Page</h1>
        {this.state.loading &&
         <h2> Loading</h2>
        }
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      </div>
      );
    }
}

export default Home;