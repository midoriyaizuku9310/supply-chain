import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Customers from './Components/Customers'
import Orders from './Components/Orders'
import Products from './Components/Products';
import Supply from './Components/minilogin';
import AdminHome from './Components/AdminHome';
import Users from './Components/Users';
import DashBoard from './Components/DashBoard';
import NavbarAdmin from './Components/NavBar';
import OrdersHome from './Components/OrdersHome';
import LogoutButton from './Components/Logout';
const AppRoutes = () => {
    
    
    return (
        <>
            <BrowserRouter>
                {/* <navbar/> */}
                <NavbarAdmin/>
                
                <div className='container'>
                    <Routes >
                        
                            <Route exact path='home' element={<Home />} />
                            <Route exact path='adminhome' element={<AdminHome />} />
                            <Route exact path='users' element={<Users />} />
                            <Route exact path='professionals' element={<OrdersHome />} />
                            

                        <Route exact path='products' element={<Products />} />
                        <Route exact path='customers' element={<Customers />} />
                        <Route exact path='orders' element={<Orders />} />
                        <Route path='login' element={<Supply/>}/>
                        <Route path='' element={<DashBoard />} />
                        <Route path='dashboard' element={<DashBoard />} />
                        <Route path='logout' element={<LogoutButton />} />


                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;

























