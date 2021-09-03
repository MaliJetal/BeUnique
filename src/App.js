import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Navbar />
        <Showcase />
        <Footer />
      </div>
    </div>
  );
}

export default App;
