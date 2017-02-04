import axios from 'axios';

axios('https://httpbin.org/get')
  .then(response => console.log('1', response.status))
  .catch(err => console.error(err));
