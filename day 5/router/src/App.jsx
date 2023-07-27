import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import { UserProfile, Profile } from "./components/profile";
import Navbar from "./components/navbar";
import { Example } from "./components/hooks";
import Lcm from "./components/lcm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/:username" element={<UserProfile />} />
        <Route path="/hooks/example" element={<Example />} />
        <Route path="/lcm" element={<Lcm />} />
      </Routes>
    </>
  );
}

export default App;
