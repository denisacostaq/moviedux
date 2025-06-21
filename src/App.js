import logo from './logo.svg';
import './App.css';
import './styles.css'
import Header from './components/header';
import Footer from './components/footer';
import MoviesGrid from './components/movies-grid';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
