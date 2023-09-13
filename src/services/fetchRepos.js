import axios from 'axios';

async function LoadData(query, sort = '', order = '') {
  let github_url = `https://api.github.com/search/repositories?q=${query}&sort=${sort}&order=${order}`;

  axios.defaults.headers.get.Accept = 'application/vnd.github+json';
  if (query) {
    const { data } = await axios.get(github_url);

    return data;
  }

  return [];
}

export default LoadData;
