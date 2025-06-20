import logo from './logo.svg';
import './App.css';
import './styles.css'
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
