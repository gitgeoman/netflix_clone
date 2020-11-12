import "./App.css";
import Row from "./Row/Row";
import Banner from "./Banner/Banner";
import requests from "./requests";
import Nav from "./Nav/Nav";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#111" }}>
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
    </div>
  );
}

export default App;
