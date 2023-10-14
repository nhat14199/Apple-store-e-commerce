import "./App.css";
import Home from "./containers/home";
import Footer from "./components/Footer";
import CardMedium, { MediumCard } from "./components/Card/MediumCard";
import CardShapeSquare from "./components/Card/CardShapeSquare";
import SmallCard from "./components/Card/SmallCard";
import ShapeSquare from "./components/Card/ShapeSquare";
import Header from "./components/Header";
import ShopTittle from "./components/ShopTittle";
import ShopMac from "./containers/shopMacs";
import ShopPhones from "./containers/shopPhones";
import ShopIpads from "./containers/shopIpads";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home />
      <ShopMac />
      <ShopPhones /> */}
      <ProductDetail />
      {/* <ShopIpads/> */}
      <Footer />
    </div>
  );
}

export default App;
