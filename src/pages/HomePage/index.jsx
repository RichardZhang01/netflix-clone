import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../utils/requests";

function HomePage() {
  return (
    <div className="homePage">
      <Navbar />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
      <Row
        title="Science Fiction Movies"
        fetchUrl={requests.fetchSciFiMovies}
      />
    </div>
  );
}

export default HomePage;
