import axios from "axios";

export const getListMovies = async () => {
  const movieList = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`
  ); // Ambil data API Popular movies
  //console.log(movieList.data.results); //Cek data nya dimovies sesuai path array objek yang terlihat di console
  return movieList.data.results;
};
