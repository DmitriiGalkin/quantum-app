import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {createMuiTheme, ThemeProvider, CssBaseline} from "@mui/material";

const theme = createMuiTheme({
    spacing: 6,
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
            primary: '#777777',
            // hint: '#FF9503',
            secondary: '#A5A5A5',
            disabled: '#C1C1C1',
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
          <ThemeProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                  <CssBaseline />
                  <App />
              </QueryClientProvider>
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
