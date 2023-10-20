import { useState } from "react";

const HOUSES = ["apartment", "town house", "duplex", "single house", "studio"];

const SeachParams = () => {
  const [location, setLocation] = useState("");

  const [house, updateHouse] = useState("");

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SeachParams;
