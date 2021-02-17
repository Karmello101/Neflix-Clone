const API_KEY = "6e65e5a5e366967973b9ea93135edcb7";

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    fetchNeflixOriginals:`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedMovies:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;
