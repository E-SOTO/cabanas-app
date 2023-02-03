import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFoundPage from './components/NotFoundPage';
import DestinationListContainer from './components/DestinationListContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/>} />
            <Route path='/item/:itemid' element={ <ItemDetailContainer/>} />
            <Route path='/destinos' element={<DestinationListContainer/>}/>
            <Route path='/destinos/:destinationTitle' element={undefined}/>
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
