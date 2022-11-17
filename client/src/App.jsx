import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './Pages/NotFoundPage';
import { HomePage } from './Pages/HomePage';
import { WelcomePage } from './Pages/WelcomePage';
import { NotFoundPageDates, WelcomePagesDates } from './utils/EnglishTexts';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<WelcomePage {...WelcomePagesDates} />} />
				<Route path='/homepage/*' element={<HomePage />} />
				<Route path='*' element={<NotFoundPage {...NotFoundPageDates} />} />
			</Routes>
		</BrowserRouter>
	);
};
