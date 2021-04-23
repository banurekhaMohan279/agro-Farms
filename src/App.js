import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Agro Farms</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
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
