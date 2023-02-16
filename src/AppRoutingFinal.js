import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NotFoundPage } from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import Dashboardpage from './pages/dashboard/Dashboard';
import './App.css'

function AppRoutingFinal() {

    let loggedIn = true;

    return (
        <Router>
            <Routes>

                {/* Redirecting to the dashboard if the user is logged in, otherwise it is redirecting
                to the login page. */}
                <Route exact path='' element={loggedIn ? <Navigate to='/dashboard'/> : <LoginPage/> }/>

                {/* Rendering the LoginPage component. */}
                <Route exact path='/login' element={<LoginPage/>}/>

                {/* Rendering the Dashboardpage component if the user is logged in, otherwise it is
                redirecting to the login page. */}
                <Route exact path='/dashboard' element={loggedIn ? <Dashboardpage/> : <Navigate to='login'/> }/>

                <Route path='*' element={<NotFoundPage/>} />
            </Routes>
        </Router>
    );
}

export default AppRoutingFinal;
