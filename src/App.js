import  Details  from "./components/Details";
import  Main from "./components/Main";
import  Search  from "./components/Search";
// import { Navbar } from "./components/Navbar";
import Welcome from "./components/Welcome";
import { Route, Routes } from "react-router-dom";

const App =()=> {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/main" element={<Main/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
      <Route path="/details" element={<Details/>}></Route>
    </Routes>
  );
}

export default App;
