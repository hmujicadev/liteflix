const API_KEY = '6f26fd536dd6192ec8a57e94141f8b20';

export default {
  featuredMovie: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
};
