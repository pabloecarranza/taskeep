import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const PrivateRoutes = ({ children }) => {
	const userLogged = JSON.parse(localStorage.getItem('identified-user'));

	return userLogged ? children : <Navigate to='/' />;
};
