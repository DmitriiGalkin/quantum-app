import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {CssBaseline} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        background: {
            default: "#FFCC00",
        },
        primary: {
            main: '#FF9503',
            contrastText: '#674100',
        },
        secondary: {
            main: '#FFCE00',
            contrastText: '#674100',
        },
        text: {
            //primary: '#e65100',
            // secondary: '#FFCE00',
        },
    }
});

//

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <MuiThemeProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                  <CssBaseline />
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
