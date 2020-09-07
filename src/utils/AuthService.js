//import api from '../frontend/api'


export default class AuthService{


    login = formData=>{
        return fetch('http://localhost:8080/', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: formData
        })
    }

    setProfile = profile =>{
        // Saves profile data to localStorage
        localStorage.setItem('profile', JSON.stringify(profile))
    }
    
    getProfile = ()=>{
        // Retrieves the profile data from localStorage
        const profile = localStorage.getItem('profile')
        return profile ? JSON.parse(localStorage.profile) : {}
    }
    
    setToken =token =>{
        // Saves user token to localStorage
        localStorage.setItem('token', token)
    }
    
    getToken = ()=>{
        // Retrieves the user token from localStorage
        return localStorage.getItem('token')
    }
    logout = () =>{
        // Clear user token and profile data from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
    }
}