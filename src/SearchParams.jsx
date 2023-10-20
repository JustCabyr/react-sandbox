import { useState } from "react";

const HOUSES = ["apartment", "town house", "duplex", "single house", "studio"];

const SeachParams = () => {
  const [location, setLocation] = useState("");
  const [house, setHouse] = useState("");

  return (
    <div className="search-params">
      <form>
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
            }}
          >
            <option />
            {HOUSES.map((house) => {
              <option key={house}>{house}</option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SeachParams;
