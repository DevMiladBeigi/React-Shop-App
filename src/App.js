import React from "react";
import {Container} from 'react-bootstrap'
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
export const App = () => {
  return (
    <div>
      <Header />
      <Container>
        Fc Market
      </Container>
      <Footer />
    </div>
  );
};
