import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {createMuiTheme, CssBaseline, ThemeProvider} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import "dayjs/locale/ru";

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Manrope, Arial',
        h5: {
            fontSize: 16,
            fontWeight: 700,
        },
        h6: {
            fontSize: 15,
            fontWeight: 500,
        },
        body1: {
            fontSize: 14,
            fontWeight: 400,
        },
        subtitle1: {
            fontSize: 14,
            fontWeight: 700,
        }
    },
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
                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
                    <App />
                  </LocalizationProvider>
              </QueryClientProvider>
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
