import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} exact />
          </Routes>
          <Routes>
            <Route path="/product/:_id" element={<Product />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
