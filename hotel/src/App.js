import {Home} from './pages/Home'
import GlobalStyles from './components/globals/GlobalStyles'
import {SmallBtn} from './components/globals/Buttons'
import {NavBar} from './components/globals/NavBar'

function App() {
  return (
    <>
    <GlobalStyles />
    <NavBar/>
    <Home />
    </>
  );
}

export default App;
