import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './components/ProtectedRoute'
// import Template from './components/Template'
import store from './redux/store'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { lightTheme } from './theme/lightTheme'
import ErrorPage from './pages/ErrorPage';
import { URLS } from './consts'
function App() {
	return (
		<Provider store={store}>
			<CssBaseline />
			<ThemeProvider theme={lightTheme}>
				<BrowserRouter>
					<Switch>
						<Route exact path={URLS.login}> Login page </Route>
						<Route exact path={URLS.home}> some home page</Route>
						<ProtectedRoute exact path="/test"> Testing Protected Routes </ProtectedRoute>
						{/* Catch all */}
						<Route path="*" exact>
							<ErrorPage code="404" subtitle="Not found!" text="The resource you’re looking for doesn’t exist or is temporarily under maintainence." />
						</Route>
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	);
}

export default App;