import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
	const userLogged = JSON.parse(localStorage.getItem('identified-user'));

	return userLogged ? children : <Navigate to='/null' />;
};
