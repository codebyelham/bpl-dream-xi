import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const playerFetch = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playerPromise = playerFetch();
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>
    </>
  );
}

export default App;
