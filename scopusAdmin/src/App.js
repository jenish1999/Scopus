import React, { useState } from 'react';
import './App.js';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import SideNavigation from './components/sidebar/Sidenavigation';
import Main from './Screens/Main';
import { UserContext } from './context.js';

const App = () => {
	const [current, setCurrent] = useState('Bhoopender Bhaskar');

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ current, setCurrent }}>
				<div className='wrapper'>
					<Header />
					<SideNavigation />
					<section className='content-wrapper'>
						<Main />
					</section>
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
};

export default App;
