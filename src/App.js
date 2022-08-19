import Navbar, { CharityBar } from "./components/Navbar";
import { Landingpage } from "./pages/landingpage";
import { Box } from "@chakra-ui/react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          {["/", "/home"].map((path, index) => {
            return (
              <Route path={path} element={<Landingpage/>}/>
            )
          })} 
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
