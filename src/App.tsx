import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/ToopBar";
import Home from "./containers/home";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import CardMedium from "./components/Card/CardMedium";
import CardShapeSquare from "./components/Card/CardShapeSquare";

function App() {
  return (
    <div className="App">
      <div className="bg-slate-50">
        <TopBar />
        <div>
          <Banner />
        </div>
        <div className="mx-80 ">
          <Home />
        </div>
        <CardMedium />
        <CardShapeSquare />
        <div className="pt-10">
          {" "}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
