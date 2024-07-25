import "./App.css";
import Hero from "./components/Hero/Hero";
import Metodology from "./components/Metodology/Metodology";
import Results from "./components/Results/Results";
import Plans from "./components/Plans/Plans";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <div className="App">
      <Hero />
      <Metodology />
      <Results />
      <Plans />
      <Feedback />
    </div>
  );
}

export default App;
