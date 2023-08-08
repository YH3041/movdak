import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
  Authorization: `bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
};

export const fetchDataFromApi = async (url: string, params?: string) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
