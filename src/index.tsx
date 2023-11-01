import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';

import App from './components/App';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import Circuit from './components/CircuitPage';
import Frequency from './components/FrequencyPage';

import { ThemeContext, themes } from './themes';

const router = createBrowserRouter([
  { path: "/"
  , element: <App />
  , errorElement: 
      <ThemeContext.Provider value={themes.error}>
        <ErrorPage/>
      </ThemeContext.Provider>
  , children: [
      { path: ""
      , element: <HomePage />
      },
      { path: "projects/circuit"
      , element: 
          <ThemeContext.Provider value={themes.circuit}>
            <Circuit />
          </ThemeContext.Provider>
      },
      { path: "projects/frequency"
      , element: 
          <ThemeContext.Provider value={themes.frequency}>
            <Frequency />
          </ThemeContext.Provider>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
