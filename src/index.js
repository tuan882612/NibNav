import { React, useState, useNavigate, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './Assets/Styles/index.css';

import NavigationBar from './Components/NavBar';
import Feedback from './Pages/Feedback';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import Profile from './Pages/Profile';
import Search from './Pages/Search';
import NotFound from './Pages/NotFound';
import Register from './Pages/Register';
import Auth from './Pages/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Router>
		<NavigationBar />
		<Routes>
            <Route
                path='/home'
                element={<Home />}
            />
            <Route
                path='/search'
                element={<Search />}
            />
            <Route
                path='/feedback'
                element={<Feedback />}
            />
            <Route
                path='/profile'
                element={<Profile />}
            />
            <Route
                path='/login'
                element={<LoginPage />}
            />
			<Route
                path='/register'
                element={<Register />}
            />
			<Route
                path='/auth'
                element={<Auth />}
            />
            <Route path='/*' element={<NotFound />}/>
        </Routes>
	</Router>
);