import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import SharedLayout from './pages/SharedLayout';
import Drivers from './pages/Drivers';
import Driver from './pages/Driver';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
  const [user, setUser] = useState(null);

  return (
   <>
    <BrowserRouter>

      <Routes>

        <Route 
        path='/' 
        element={<SharedLayout />}
        >
          <Route 
          index 
          element={<Home />} 
          />

          <Route 
          path='/Contact' 
          element={<Contact setUser={setUser} user={user}/>} 
          />

          <Route 
          path='/Appointment' 
          element={<Appointment setUser={setUser}/>} 
          />

          <Route 
          path='/Drivers' 
          element={<Drivers />} 
          />

          <Route 
          path='/Drivers/:driverid' 
          element={<Driver />} 
          />

          <Route 
          path='/Login' 
          element={<Login setUser={setUser}/>} 
          />

          <Route 
          path='/Dashboard' 
          element={<Dashboard user={user}/>} 
          />

          <Route 
          path='*' 
          element={<Error />} 
          /> 

        </Route>

      </Routes> 

    </BrowserRouter>
    
   </>
  );
}

export default App;
