import about from './img/about.jpg';

export default function About(){
const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

  return(
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={about} className="card-img" alt="AgroFarms About"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About AgroFarms</h5>
              <p className="card-text">
              Did you ever imagine that the freshest of fruits and vegetables, top quality pulses and food grains, dairy products and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? India’s first comprehensive online megastore, agroFarms, brings a whopping 20000+ products with more than 1000 brands, to over 4 million happy customers. From household cleaning products to beauty and makeup, agroFarms has everything you need for your daily needs. agroFarms is convenience personified We’ve taken away all the stress associated with shopping for daily essentials, and you can now order all your household products and even buy groceries online without travelling long distances or standing in serpentine queues.
              </p>
              <p className="card-text"><small className="text-muted">Last updated {dateString}</small></p>
            </div>
          </div>
        </div>
      </div>
  );
}
