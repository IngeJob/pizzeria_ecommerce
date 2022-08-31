import axios from 'axios';

export default axios.create({
    baseURL:"https://pizzaallapala.p.rapidapi.com", 
    headers: {
        'X-RapidAPI-Key': '3f0342e012msh5233667800e9135p1f5fe6jsn28c74edb3598',
        'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
      }
})