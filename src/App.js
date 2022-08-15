import Navbar from "./components/Navbar";
import { Landingpage } from "./pages/landingpage";
import {Box} from '@chakra-ui/react'

function App() {
  return (
    <Box className='page-home ac-nav-overlap'>
      <Navbar />
      <Landingpage />
    </Box>
  );
}

export default App;
