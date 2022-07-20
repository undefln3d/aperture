import  {Routes,Route} from 'react-router-dom'
import  LandingPage from './pages/landing-page/Landing-page'
import Register from "./pages/register-page/Register";
import TablePage from "./pages/api-page/Table-page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/table_page" element={<TablePage/>}/>
    </Routes>
  );
}

export default App;
