import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import request from "../Request";

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Nav />
      <Banner />
      <Row
        tittle="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row tittle="Popular" fetchUrl={request.fetchPopular} />
      <Row tittle="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row tittle="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row tittle="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row tittle="Horrow Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row tittle="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row tittle="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
