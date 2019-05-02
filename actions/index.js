import axios from 'axios';
import _ from 'lodash';

const API_KEY = '7ff3c6489dmsh2127eacca019461p1a07f7jsn906ed1741549';

const axiosInstance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 2000,
    headers: {'X-RapidAPI-Key': API_KEY}
  });

  export const searchTracks = singerName => {

    return axiosInstance.get(`search?q=${singerName}`).then(
        response => {
            const albums = response.data.data.map(item => item.album); 
            const uniqueAlbums = _.uniqBy(albums, 'title');

            return uniqueAlbums;
    })
  }

  export const getAlbumTracks = albumId => {
    return axiosInstance.get(`album/${albumId}`).then(response => response.data.tracks.data)
  }