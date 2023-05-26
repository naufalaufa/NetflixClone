import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import request from "./Request";
import dayjs from "dayjs";

function Banner() {
  const [movie, setMovie] = useState([]);

  console.log(movie);

  useEffect(() => {
    const fetchData = async () => {
      const reques = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        reques.data.results[
          Math.floor(Math.random() * reques.data.results.length - 1)
        ]
      );
    };

    fetchData();
  }, []);

  const base_url_image = `https://image.tmdb.org/t/p/original`;

  return (
    <>
      <header
        style={{
          background: `url('${base_url_image}${movie?.backdrop_path}')`,
        }}
        className="banner"
      >
        <div className="banner-content">
          <h1 className="banner-title">
            {movie?.name || movie?.original_name}
          </h1>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
            <p>{dayjs(movie?.first_air_date).format("DD MMMM YYYY")}</p>
          </div>
          <p style={{ fontSize: "15px" }} className="banner-desc">
            {movie?.overview}
          </p>
        </div>
      </header>
    </>
  );
}

export default Banner;
