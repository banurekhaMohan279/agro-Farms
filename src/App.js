import logo from './logo.svg';
import './App.css';
import carousel1 from './img/carousel-1.jpg';
import carousel2 from './img/carousel-2.jpg';
import carousel3 from './img/carousel-3.jpg';

function App() {
  return (
    <div classNameName="App">
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
      <div className = "Home container" id = "home">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="100000">
                <img src= {carousel1} className="d-block w-100" alt="carousel img 1"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000000">
                <img src={carousel2} className="d-block w-100" alt="carousel img 2"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={carousel3} className="d-block w-100" alt="carousel img 3"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      </div>
      <div className = "About" id = "about">
        About
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
