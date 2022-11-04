import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './Pages/NotFoundPage';
import { HomePage } from './Pages/HomePage';
import { WelcomePage } from './Pages/WelcomePage';
import { AuthProvider } from './context/AuthProvider';
import { NotFoundPageDates, WelcomePagesDates } from './utils/EnglishTexts';

export const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<WelcomePage {...WelcomePagesDates} />} />
					<Route path='/homepage/*' element={<HomePage />} />
					<Route path='*' element={<NotFoundPage {...NotFoundPageDates} />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};
