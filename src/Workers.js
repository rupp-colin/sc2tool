import { useState } from "react";

const Workers = () => {
  const [minsWorker, setMinsWorker] = useState(12);
  const [vesWorker, setVesWorker] = useState(0);

  const addMinsWorker = () => setMinsWorker(minsWorker + 1);
  const addVesWorker = () => setVesWorker(vesWorker + 1);
  const destroyMinsWorker = () =>
    !!minsWorker ? setMinsWorker(minsWorker - 1) : null;
  const destroyVesWorker = () =>
    !!vesWorker ? setVesWorker(vesWorker - 1) : null;

  //method for moving mins to ves
  const minsToVes = () => {
    if (minsWorker >= 1) {
      destroyMinsWorker();
      addVesWorker();
    }
  };

  //method for moving mins to ves
  const vesToMins = () => {
    if (vesWorker > 0) {
      addMinsWorker();
      destroyVesWorker();
    }
  };

  return (
    <div className="workers-container">
      <p>
        worker count: <span>mins: {minsWorker} </span>ves: {vesWorker}
        <span></span>
      </p>
      <div>
        <button onClick={addMinsWorker}>{"add to mins"}</button>
        <button onClick={destroyMinsWorker}>{"kill mins worker"}</button>
      </div>
      <button onClick={() => minsToVes()}>{"min -> ves"}</button>
      <button onClick={vesToMins}>{"min <- ves"}</button>
      <button onClick={addVesWorker}>{"add to ves"}</button>
      <button onClick={destroyVesWorker}>{"kill ves worker"}</button>
    </div>
  );
};

export default Workers;
