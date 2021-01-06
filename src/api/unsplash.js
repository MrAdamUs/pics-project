import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8b3a2a273267b7dcdea9218267bff3aa9c213a7ea9958cde411c632d34d87d93'
      }
});

