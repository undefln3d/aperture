import  {Routes,Route} from 'react-router-dom'
import  RootComponent from './components/root_components/Root-component'
import Register from "./components/email_form/Register";
import TablePage from "./components/header/table-page/table-page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootComponent/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/table_page" element={<TablePage/>}/>
    </Routes>
  );
}

export default App;
