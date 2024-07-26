import "./App.css";
import Hero from "./components/Hero/Hero";
import Metodology from "./components/Metodology/Metodology";
import Results from "./components/Results/Results";
import Plans from "./components/Plans/Plans";
import Feedback from "./components/Feedback/Feedback";
import About from "./components/About/About";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Metodology />
      <About />
      <Results />
      <Plans />
      <Feedback />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
