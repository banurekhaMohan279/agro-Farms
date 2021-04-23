import Header from './Header';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
    <header>
      <Header/>
    </header>
    <main>
      <div className = "Home container mb-5" id = "home">
      <Home/>
      </div>
      <div className = "About container mb-5" id = "about">
        <About/>
      </div>
      <div className = "Contact" id = "contact">
        Contact
      </div>
    </main>

    <footer>
    </footer>
    </div>
  );
}

export default App;
