import Footer from './Components/Footer'
import Header from './Components/Header'
import ListVideosContainer from './Containers/ListVideosContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ListVideosContainer />
      <Footer />
    </div>
  );
}

export default App;
