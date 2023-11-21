import { useState } from "react";

const Resources = () => {
  const [mins, setMins] = useState(50);
  const [ves, setVes] = useState(0);

  return (
    <div className="resources-container">
      <span className="resources-display"> Mins: {mins}</span>
      <span className="resources-display"> Ves: {ves}</span>
    </div>
  );
};

export default Resources;
