import axios from 'axios';


export default {
    getData : (param)=> axios.get(`https://jsonplaceholder.typicode.com/users`)
    

    
}