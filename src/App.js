import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Breadcrumbs from './components/Breadcrumbs';
import NotFound from './pages/NotFound';
import { useState } from 'react';
import UserTable from './pages/user/UserTable';
import UserForm from './pages/user/UserForm';

function App() {
  const [breadCrumbs, setBreadCrumbs] = useState([])

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="content-wrapper">
          <Breadcrumbs breadCrumbs={breadCrumbs} />
          <div className="content">
            <div className="container">
              <div className="row">
                <Routes>
                  <Route path="*" element={<NotFound setBreadCrumbs={setBreadCrumbs} />}></Route>
                  <Route path="/" element={<Dashboard />}></Route>

                  <Route path="/User" element={<UserTable setBreadCrumbs={setBreadCrumbs} />}></Route>
                  <Route path="/User/:id" element={<UserForm setBreadCrumbs={setBreadCrumbs} />}></Route>

                </Routes>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
