import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import Creative from "./components/Creative";
import Features from "./components/Features";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Navbar />
        <Showcase />
        <Creative />
        <Features />
        <Footer />
      </div>
    </div>
  );
}

export default App;
