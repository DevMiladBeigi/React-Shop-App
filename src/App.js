import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./pages/Home";
export const App = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Home/>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
