import React from "react";
import Customer from "../component/Customer";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Services from "../component/Services";
import Template from "../component/Template";

export default function MainPage() {
  return (
    <div>
      <Header />
      <Services />
      <Customer />
      <Template />
      <Footer/>
    </div>
  );
}
