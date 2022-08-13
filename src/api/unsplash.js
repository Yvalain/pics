import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID vJI8QYcgQCu_HWq4n_Xvs3y9lE23WHXTQ4sS95WNXT0',
  },
});
