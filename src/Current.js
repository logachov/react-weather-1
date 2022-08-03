import "./Current.css";

export default function Current() {
  return (
    <div className="current-form">
      <hr />
      <div className="row currentInfo">
        <div className="col-6">
          <p className="currentCity">Amsterdam</p>
          <p className="currentTime">Monday 16:50</p>
          <p className="currentDescription">Clear</p>
        </div>
        <div className="col-2">
          <img
            className="currentPicture"
            src="http://openweathermap.org/img/w/04n.png"
            alt="Clouds"
          />
        </div>
        <div className="col-4 currentTemp">
          <span className="TempC">25</span>
          <span className="TempC">°C</span>
          <span className="secondTemp">→°F</span>
          <p className="humidity">Humidity 35%</p>
          <p className="wind">Wind 3 m/c</p>
        </div>
        <div className="col-4 hiddenTemp">
          <span className="TempF">25</span>
          <span className="TempF">°F</span>
          <span className="secondTemp">→°C</span>
          <p className="humidityF">Humidity 35%</p>
          <p className="windF">Wind 3 m/c</p>
        </div>
      </div>
    </div>
  );
}