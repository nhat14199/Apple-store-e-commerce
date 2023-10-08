import "./App.css";
import Home from "./containers/home";
import Footer from "./components/Footer";
import CardMedium, { MediumCard } from "./components/Card/MediumCard";
import CardShapeSquare from "./components/Card/CardShapeSquare";
import SmallCard from "./components/Card/SmallCard";
import ShapeSquare from "./components/Card/ShapeSquare";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
