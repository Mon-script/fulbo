// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RutasProtegidas from './pages/Component/RutasProte';
import { NotFound } from './pages/Component/notFound';
import Home from './pages/Component/home';
import { Producto } from './pages/domain/Producto';
import { Stock } from './pages/domain/stock';
import { Entrada } from './pages/domain/entrada';
import { Salida } from './pages/domain/salida';
import RegistroUsuario from './pages/Component/formulario/FormularioDeRegistro'
import { UserProvider } from './userContext';
import { UnathorizedRoute } from './pages/domain/unathorized';
import ProtectedRoute from './pages/Component/Protectedrute';
import PersonalPanel from './pages/domain/usuarioPanel';
import LayoutBase from './pages/domain/layout';



function App() {


  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route element={<RutasProtegidas />}>
            <Route element={<LayoutBase />}>
              <Route index element={<Home />} />
              <Route path='/producto' element={<Producto />} />
              <Route path='/stock' element={<Stock />} />
              <Route path='/entrada' element={<Entrada />} />
              <Route path='/salida' element={<Salida />} />
              <Route path='/home' element={<Home />} />
              <Route path='/registro' element={<ProtectedRoute><RegistroUsuario/></ProtectedRoute>} />
              <Route path='/personal' element={<ProtectedRoute><PersonalPanel /></ProtectedRoute>} />
              <Route path='desautorizado' element={<UnathorizedRoute />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Route>

        </Routes>
      </Router>
    </UserProvider>
  );

}

export default App;




/*
// App.js
import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RutasProtegidas from './pages/Component/RutasProte';
import { Root } from './pages/Component/Root';
import { NotFound } from './pages/Component/notFound';
import Home from './pages/Component/home';
import { Producto } from './pages/domain/Producto';
import { Stock } from './pages/domain/stock';
import { Entrada } from './pages/domain/entrada';
import { Salida } from './pages/domain/salida';
import RegistroUsuario from './pages/Component/formulario/FormularioDeRegistro'
import { UserProvider } from './userContext';
import { UnathorizedRoute } from './pages/domain/unathorized';
import ProtectedRoute from './pages/Component/Protectedrute';
import PersonalPanel from './pages/domain/usuarioPanel';



function App() {


  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route element={<RutasProtegidas />}>
            <Route element={<Root />}>
              <Route index element={<Home />} />
              <Route path='/producto' element={<Producto />} />
              <Route path='/stock' element={<Stock />} />
              <Route path='/entrada' element={<Entrada />} />
              <Route path='/salida' element={<Salida />} />
              <Route path='/home' element={<Home />} />
              <Route path='/registro' element={<ProtectedRoute><RegistroUsuario/></ProtectedRoute>} />
              <Route path='/personal' element={<ProtectedRoute><PersonalPanel /></ProtectedRoute>} />
              <Route path='desautorizado' element={<UnathorizedRoute />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Route>

        </Routes>
      </Router>
    </UserProvider>
  );

}

export default App;
*/