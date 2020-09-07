import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Dropdown,Button,Collapse} from 'react-bootstrap';
import api from './../api'
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import config from '../../config.json';
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component {
  state = {
    loading:true,
    persons: []
  }
  onClick1 = () => {
    // api.postData('params')
    // .then(res => {
      
    //   alert(res.data);
      
    // })
    fetch('http://localhost:8080/', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({a:'a'})
   });
    
  }
  componentWillMount() {
    document.title = "Home";
    api.getData('params')
    .then(res => {
      const persons = res.data;
      console.log(res.data);
      this.setState({ persons ,loading:false});
    })
  } 
  componentDidMount() {
   
  }

  handleSubmit = (event)=> {
    // Prevent default behavior
    event.preventDefault();

    const data = new FormData(event.target);
  
    fetch('http://localhost:8080/', {
      method: 'post',
      
      body: data
   })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
   
}
facebookResponse = (res) => {
  console.log(res);
  const token = res.accessToken;
  console.log(token);
  api.loginFacebook(token)
  .then(response => {
    //console.log(response.data.token);
    return response.data
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })


  //   fetch('http://localhost:8080/auth/facebook', {
  //     method: 'post',
      
  //     headers: new Headers({
  //       'Authorization': 'Bearer '+token
  //     }), 
  // })
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  // })
};

googleResponse = (res) => {
  console.log(res);
  //alert(res);
  const token = res.accessToken;
  console.log('token :'+token);

  api.loginGoogle(token)
  .then(response => {
    return response.data
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })


};
twitterResponse = (res) =>{
  
}
onFailure = (res) =>{
  
}
    render() {
      

      return (
      <div>
        
        <h1 onClick={this.onClick1}>Home Page</h1>
        {this.state.loading &&
         <h2> Loading</h2>
        }
        <form id="my-form" onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input name="username"/>
          <label>Password</label>
          <input name="password"/>
          <button>Send data!</button>
        </form>

        <FacebookLogin
          appId={config.FACEBOOK_APP_ID}
          autoLoad={false}
          fields="name,email,picture"
          callback={this.facebookResponse} />
        <GoogleLogin
          clientId={config.GOOGLE_CLIENT_ID}
          
          onSuccess={this.googleResponse}
          onFailure={this.onFailure}
        />
         <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
          onFailure={this.onFailure} onSuccess={this.twitterResponse}
          requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      </div>
      );
    }
}

export default Home;