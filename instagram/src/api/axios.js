import axios from 'axios';
export const api = axios.create({
 //  baseURL: 'https://mock-api-ig2.glitch.me/',
 baseURL: 'https://api-socmed.jordanong.pw',
 //  baseURL: 'http://localhost:2500',
 //  baseURL: 'http://103.181.182.209:8001/',

 //  auth: {
 //   username: 'abc',
 //   password: 'asd'
 //  }
 headers: {
  Authorization: `Bearer ${localStorage.getItem('auth')}`
 }
});
