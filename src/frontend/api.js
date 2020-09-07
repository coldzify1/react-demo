import axios from 'axios';
const url = 'http://newsite.degitobangkok.com:8080/mail/contact';
const base = 'http://localhost:8080/'
export default {
    
    getData : (param)=> axios.get(`https://jsonplaceholder.typicode.com/users`),
    getData2 : (param)=> axios.get(`http://ec2-52-77-239-93.ap-southeast-1.compute.amazonaws.com/getPortfolio/en`),

    postData : ( params) =>axios.post(base, {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }),
    
    //login : (data) => axios.post()

    loginFacebook : (token) => axios.get(base+'auth/facebook',
    {headers : {"access_token" : token}}
    ),
    loginGoogle : (token) => axios.get(base+'auth/google',
    {headers : {"access_token" : token}}
    )
    
}