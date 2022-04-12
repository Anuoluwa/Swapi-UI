import { Routes, Route, BrowserRouter, useSearchParams } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./App.css";
import { Link, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page: number  = Number(params.get('page'));

  return (
      <Routes>
        <Route path="/" element={<Home  page={page} />} />
        <Route path="/details" element={<Details />} />
      </Routes>
  );
}

export default App;
