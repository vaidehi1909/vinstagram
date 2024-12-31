import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import { Provider } from "react-redux";

// import { store } from "./store";
import AppRouter from './Router'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <Provider store={store}> */}
    <RouterProvider router={AppRouter} />
  {/* </Provider> */}
</React.StrictMode>,
)
