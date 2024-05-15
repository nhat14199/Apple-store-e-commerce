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
import ProductDetail, { productDetail } from "./components/ProductDetail";
import ShopWatchs, { shopWatch } from "./containers/shopWatchs";
import ShopAirPods from "./containers/shopAirPods";
import ProductDetailGenaral from "./components/ProductDetailGenaral";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <ShopPhones /> */}
      {/* <ProductDetail /> */}
      {/* <ShopIpads /> */}
      {/* <ShopWatchs /> */}
      {/* <ShopAirPods /> */}
      {/* <ProductDetailGenaral /> */}

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop/buy-mac" component={ShopMac} />
          <Route path="/shop/buy-iphone" component={ShopPhones} />
          <Route
            path="/checkout"
            component={ProductDetailGenaral}
          />
          <Route path="/shop/buy-ipad" component={ShopIpads} />
          <Route path="/shop/buy-watch" component={shopWatch} />
          <Route path="/ban" component={ productDetail }/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
