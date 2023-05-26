import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ tittle, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url_image = `https://image.tmdb.org/t/p/original`;

  useEffect(() => {
    const popularData = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data);
    };
    popularData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{tittle}</h2>

      <div className="row__posters">
        {movies?.results?.map((movieImage) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movieImage.id}
            src={`${base_url_image}${
              isLargeRow ? movieImage.poster_path : movieImage.backdrop_path
            }`}
            isLargeRow
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
