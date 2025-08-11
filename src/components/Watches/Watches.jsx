import React, { useEffect, useState } from "react";
import Watch from "./Watch/Watch";

const Watches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <div>
      <h3>Watches</h3>
      {watches.map((watch) => (
        <Watch watch={watch}></Watch>
      ))}
    </div>
  );
};

export default Watches;
