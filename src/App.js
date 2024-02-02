import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Button } from "@mui/material";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Other from "./components/other";
import Box from "@mui/material/Box";

function App() {
  const navigate = useNavigate();

  const navigateHome = (item) => {
    navigate(item);
  };

  return (
    <div className="App">
      <Box sx={{mt:5, ml:4}}>
        <Button sx={{mr:3}} variant="outlined" onClick={() => navigateHome("/")}>Overview</Button>
        <Button variant="outlined" onClick={() => navigateHome("/other")}>Other</Button>
      </Box>

      <div className="display-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/other" element={<Other />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
