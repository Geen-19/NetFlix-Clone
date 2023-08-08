
import './App.css';
import Banner from './Banner';
import Row from './Row';
import requests from './request';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
     <Banner/>
     <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} 
     isLargeRow/>
     <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
     <Row title = "Top Rated" fetchUrl = {requests.fetchTrending}/>
     <Row title = "Action Movies" fetchUrl = {requests.fetchTrending}/>
     <Row title = "Comedy Movies" fetchUrl = {requests.fetchTrending}/>
     <Row title = "Horror Movies" fetchUrl = {requests.fetchTrending}/>
     <Row title = "Romance Movies" fetchUrl = {requests.fetchTrending}/>
     <Row title = "Documentaries" fetchUrl = {requests.fetchTrending}/>

    </div>
  );
}

export default App;
