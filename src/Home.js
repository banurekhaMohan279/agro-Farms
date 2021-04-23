import carousel1 from './img/carousel-1.jpg';
import carousel2 from './img/carousel-2.jpeg';
import carousel3 from './img/carousel-3.jpg';

export default function Home(){
  return(
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <img src= {carousel1} className="d-block w-100" alt="carousel img 1"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Upto 50% off on everything</h5>
                <p>Shop before the stocks run out!!</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={carousel2} className="d-block w-100" alt="carousel img 2"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Fresh from our farms to your homes</h5>
                <p>All our veggies and fruits are free from harmful chemicals!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="d-block w-100" alt="carousel img 3"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Refer and Earn!</h5>
                <p>Refer your friend and get 10% on your next purchase</p>
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
  )
}
