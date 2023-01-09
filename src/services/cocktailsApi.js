import axios from 'axios';

// import { BASE_GENRE_URL, api_key } from 'constants/urls';

axios.defaults.baseURL = 'https://cocktailsAPI/';

// FETCHING ALL COCKTAILS FOR THE FIRST TIME
export const fetchingCocktails = async () => {
  const response = await axios.get('cocktails-url');
  return response.data;
};

// SEARCHING COCKTAILS USING FILTER
export const fetchingByName = async query => {
  const response = await axios.get('cocktail-name-url', { query });

  //   if (response.data.total_results === 0) {
  //     return Promise.reject(new Error(`Ooops! No images with ${query}`));
  //   } else {
  //     const total = response.data.total_results;
  //     const results = response.data.results;
  //     return { total, results };
  //   }
  return response.data;
};
