import "./App.css";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Row from "./components/Row";
import Nav from "./components/Nav";
import styled from "styled-components";
import mvRequests from "./api/request";


function App() {
  return (
    <div className="App">
      <Container>
        <Nav />
        <Banner />
        <Category />
        <Row title="Trending Now" id="TN" fetchUrl={mvRequests.fetchTrending}/>
        <Row title="Top Rated" id="TR" fetchUrl={mvRequests.fetchTopRated}/>
        <Row title="Action Movies" id="AM" fetchUrl={mvRequests.fetchActionMovies}/>
        <Row title="Comedy Movies" id="CM" fetchUrl={mvRequests.fetchComedyMovies}/>

      </Container>
    </div>
  );
}

export default App;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
