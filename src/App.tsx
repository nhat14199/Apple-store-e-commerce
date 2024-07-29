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

import ShopWatchs, { shopWatch } from "./containers/shopWatchs";
import ShopAirPods from "./containers/shopAirPods";
import ProductDetailGenaral from "./components/ProductDetailGenaral";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkout from "./containers/checkout";
import Login from "./containers/auth/Login";
import Register from "./containers/auth/Register";
import axios from "axios";
import LottieAnimation from "./components/animate";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <div className=" sm:block lg:hidden w-screen h-screen ">
        {" "}
        <LottieAnimation />
        <div className="text-xl font-medium">
          {" "}
          Sorry we are developing on moblie{" "}
        </div>
      </div>
      <div className=" sm:hidden lg:block ">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop/buy-mac" component={ShopMac} />
            <Route path="/shop/buy-iphone" component={ShopPhones} />
            <Route path="/checkout/:id" component={ProductDetailGenaral} />
            <Route path="/check-out-mac/:id" component={ProductDetail} />
            <Route path="/shop/buy-ipad" component={ShopIpads} />
            <Route path="/shop/buy-watch" component={shopWatch} />
            <Route path="/pay/:total" component={Checkout} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
