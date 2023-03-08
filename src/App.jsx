import "./App.css";
import React from "react";
import { Header, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ERROR_ROUTE, HOME_ROUTE } from "./constants/paths";
import { Home, Error, PageNotFound } from "./Pages";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ERROR_ROUTE + "/:statusCode"} element={<Error />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
