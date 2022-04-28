 
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./Pages/About/About";
import AddService from "./Pages/AddService/AddService";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ManageServices from "./Pages/ManageServices/ManageServices";
import Orders from "./Pages/Orders/Orders";
import Register from "./Pages/Register/Register";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import UpdateUser from "./UpdateUser/UpdateUser";

function App() {
  return (
    <div>
      <Header />

      <Routes>

        <Route path='/' element={
          <Home />
        } />
        <Route path='/home' element={
          <Home />
        } />
        <Route path='/about' element={<About />} />
        <Route path='/service/:serviceId' element={<ServiceDetail />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

        <Route path='/add-service' element={

          <RequireAuth>
            <AddService />
          </RequireAuth>



        }></Route>
        <Route path='/update-service/:id' element={

          <RequireAuth>
            <UpdateUser/>
          </RequireAuth>



        }></Route>
        <Route path='/manage' element={

          <RequireAuth>
            <ManageServices/>
          </RequireAuth>



        }></Route>

        <Route path='/checkout/:serviceId' element={

          <RequireAuth>
            <CheckOut />
          </RequireAuth>

        }></Route>
        <Route path='/orders' element={

          <RequireAuth>
            <Orders/>
          </RequireAuth>

        }></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
