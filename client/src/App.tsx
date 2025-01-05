import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.tsx";
import Nav from './components/nav/nav.tsx';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;