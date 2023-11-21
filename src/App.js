import "./styles.css";
import Resources from "./Simulator";
import Workers from "./Workers";
import TimeKeeper from "./TimeKeeper";

export default function App() {
  return (
    <div>
      <Resources />
      <Workers />
      <TimeKeeper />
    </div>
  );
}
