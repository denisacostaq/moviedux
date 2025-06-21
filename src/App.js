import logo from './logo.svg';
import './App.css';
import './styles.css'
import Header from './components/header';
import Footer from './components/footer';
import MoviesGrid from './components/movies-grid';
import WatchList from './components/watch-list';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/watchlist">Watch List</Link>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<MoviesGrid/>}></Route>
            <Route path='/watchlist' element={<WatchList/>}></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
