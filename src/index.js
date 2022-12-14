import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './common/theme/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/app/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/theme/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>

				<App />
			</BrowserRouter>

			<GlobalStyles />

		</ThemeProvider>

	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
