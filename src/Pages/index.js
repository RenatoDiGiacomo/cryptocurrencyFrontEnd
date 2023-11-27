import React from "react";
import "../sass/style.scss";
import Header from "../Components/Header/";
import Wallet from "../Pages/Wallet";
import Chart from "../Components/Chart";
import Menu from "../Components/Menu";

const Main = () => {
  return (
    <main className="container">
      <Header />
      <Wallet />
      <Chart />
      <Menu />
    </main>
  );
};

export default Main;
