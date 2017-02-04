import axios from 'axios';

document.getElementById('request').addEventListener('click', () => {
  axios('https://httpbin.org/get')
    .then((response) => {
      document.getElementById('results').innerHTML = JSON.stringify(response, null, 2);
    })
    .catch(err => console.error(err));
});
