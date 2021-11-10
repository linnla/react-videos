import axios from 'axios';

const KEY = 'AIzaSyAUb72Y_78_a5lShkKB3XRTDnsb3RCxiQc';

export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});

