import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './Pages/NotFoundPage';
import { HomePage } from './Pages/HomePage';
import { NewWelcome } from './Pages/NewWelcome';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<NewWelcome />} />
				<Route path="/homepage" element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};
