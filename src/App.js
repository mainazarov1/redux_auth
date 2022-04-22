import React from 'react';
import { Navbar } from './components/Navbar/Navbar'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/Forms/FormSignUp';
import SignIn from './components/Forms/FormSignIn';
import UsersTable from './components/UsersTable/UsersTable';
function App() {
	return (
		<BrowserRouter>{/* Router */}
			<ThemeProvider
				breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
			>
				<div className="App">
					<Navbar />
					<hr></hr>
					<Routes>
						<Route path="/users" element={<UsersTable />}></Route>
						<Route path='/signup' element={<SignUp />}></Route>
						<Route path='/signin' element={<SignIn />}></Route>
						{/* <Route path='/' /> */}
						<Route path="*" element={<SignUp to="/signup" replace />} />
					</Routes>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
