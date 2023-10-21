import { useState, useEffect } from "react";
import House from "./House";

const HOUSES = ["apartment", "town-house", "duplex", "single-house", "studio"];

const SeachParams = () => {
  const [location, setLocation] = useState("");
  const [house, setHouse] = useState("");
  const [bed, setBed] = useState("");
  const [homes, setHomes] = useState([]);
  const beds = [];

  useEffect(() => {
    requestHomes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestHomes() {
    const res = await fetch(
      `url`,
    );

    const json = await res.json();

    setHomes(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestHomes();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="location"
          />
        </label>
        <label htmlFor="house">
          House
          <select
            id="house"
            value={house}
            onChange={(e) => {
              setHouse(e.target.value);
              setBed("");
            }}
            onBlur={(e) => {
              setHouse(e.target.value);
              setBed("");
            }}
          >
            <option />
            {HOUSES.map((house) => (
              <option key={house} value={house}>
                {house}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="bed">
          Bed
          <select
            id="bed"
            disabled={beds.length === 0}
            value={bed}
            onChange={(e) => {
              setBed(e.target.value);
            }}
          >
            <option />
            {beds.map((bed) => {
              <option key={bed}>{bed}</option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>

      {homes.map((home) => (
        <House
          type={home.type}
          bed={home.bed}
          bath={home.bath}
          key={home.id}
        />
      ))}
    </div>
  );
};

export default SeachParams;
