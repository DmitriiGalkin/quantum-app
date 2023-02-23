import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#C22157',
        },
        secondary: {
            main: '#EB3F79',
        }
    }
});
// Create a client
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <MuiThemeProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                <App />
              </QueryClientProvider>
          </MuiThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
